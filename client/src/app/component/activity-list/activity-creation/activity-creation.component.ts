import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {SopService} from "../../../objects/sop/sop.service";
import {Activity} from "../../../objects/activity/activity";
import {ActivityService} from "../../../objects/activity/activity.service";
import { ManagmentLevel } from "../../../objects/managment_level/managment_level";
import { ManagmentLevelService} from "../../../objects/managment_level/managment-level.service";
import {Unit} from "../../../objects/unit/unit";
import {UnitService} from "../../../objects/unit/unit.service";
import {Sop} from "../../../objects/sop/sop";
import {JobService} from "../../../objects/job/job.service";
import {Job} from "../../../objects/job/job";

@Component({
  selector: 'app-activity-creation',
  templateUrl: './activity-creation.component.html',
  styleUrls: ['./activity-creation.component.scss']
})
export class ActivityCreationComponent implements OnInit {

  /* ----- Data ----- */
  step: number;

  units: Unit[] = [];

  errorMessage: string = "";

  sop_id: string = "";
  activities = new Map();
  management_levels: ManagmentLevel[];
  activity_selected: Activity;
  nb_new_a: number = 0; //The number of new activities
  activity_sop;
  job_sop;

  ready = false;

  new_activity: Activity = new Activity();
  new_sub_activity: Activity;
  new_unit_id;

  isNewSop = false;
  fieldsReady = false;

  constructor(private router: Router,
              private _sopService: SopService,
              private _activityService: ActivityService,
              private _managmentService: ManagmentLevelService,
              private _unitService: UnitService,
              private _jobService: JobService) { }

  async ngOnInit() {
    this.sop_id = this._sopService.getSopIdLocal();
    this.step = 1;
    await this.loadData();
    this.isNewSop = this.activities.size == 0;
    this.generateSopActivity();
    await this.initializeActivity(false);
    this.ready = true;
  }

  //Set the fields to the right value
  initializeActivity(isChild:boolean){
    if(!isChild){
      this.new_activity.activity_type_duration = "days";
      this.new_activity.managment_level_id = this.management_levels[0].managment_level_id.toString();
      this.new_unit_id = this.units[0].unit_id;
      this.new_activity.activity_id_is_father = null;
    }else{
      this.new_activity.activity_type_duration = this.activity_selected['activity'].activity_type_duration;
      this.new_activity.managment_level_id = this.activity_selected['activity'].managment_level_id;
      this.new_unit_id = this.activity_selected['unit'];
      this.new_activity.activity_id_is_father = this.activity_selected['activity'].activity_id;
    }
    this.new_activity.activity_title = "";
    this.new_activity.activity_type_output = "";
    this.new_activity.activity_type = "";
    this.new_activity.activity_shape = "";
    this.new_activity.activity_duration = null;
    this.new_activity.activity_description = "";
    this.new_activity.sop_id = this.sop_id;
  }

  async onSubmit() {
    //We are going to add every element that have been changed
    try {
      //this.errorMessage = "";
      this.ready = false;
      for (let element of this.convertMap(this.activities)) {
        if (element['state'] == 'new_activity') {

          //We have the father activity, we create a job and like it to everybody
          /* ACTIVITY CREATION */
          let id = await this._activityService.createActivity(element['activity']).toPromise();
          let job_id = await this._jobService.createJob(element['activity'].activity_title, id['data']['activity_id'], this.sop_id).toPromise();
          await this._unitService.bindUnitActivity(element['unit'], id['data']['activity_id']).toPromise();
          await this._jobService.bind_job_activity(job_id['data']['job_id'], id['data']['activity_id']).toPromise();
          await this._jobService.bind_job_activity(this.job_sop.job_id, id['data']['activity_id']).toPromise();

          //We add every children
          for (let sub_a of element['children']){
            /* SUB ACTIVITY CREATION */
            sub_a['activity'].activity_id_is_father = id['data']['activity_id'];
            let ids = await this._activityService.createActivity(sub_a['activity']).toPromise();
            await this._unitService.bindUnitActivity(sub_a['unit'], ids['data']['activity_id']).toPromise();
            await this._jobService.bind_job_activity(job_id['data']['job_id'], ids['data']['activity_id']).toPromise();
            await this._jobService.bind_job_activity(this.job_sop.job_id, ids['data']['activity_id']).toPromise();
          }

          //We generate the super activity linked
          /* SUPER ACTIVITY CREATION */
          this.generateSuperActivity(element, id['data']['activity_id']);
          let id2 = await this._activityService.createActivity(element['activity']).toPromise();
          await this._unitService.bindUnitActivity(element['unit'], id2['data']['activity_id']).toPromise();
          await this._jobService.bind_job_activity(this.job_sop.job_id, id2['data']['activity_id']);
          console.log('Super activity created no problem.');
        }
        else{
          //We have old activity
          if(element['action'] == 'delete'){
            /* ACTIVITY DELETE */
            element['state'] = 'new_activity';
            this.deleteActivity(element);
            await this._activityService.delete(element['super'].activity_id, null).toPromise();
            await this._activityService.delete(element['activity'].activity_id, this.job_sop.job_id).toPromise();
          }
          else{
            //We check its children
            let isChanged = false;
            let old_job = await this._jobService.selectFromActivity(element['activity'].activity_id).toPromise();
            console.log('Old job : ', old_job);

            for (let sub_a of element['children']){
              //We need to delete sub activity if it's changed
              if (sub_a['action'] == 'delete' && element['action'] != 'delete'){
                /* SUB ACTIVITY DELETE */
                isChanged = true;
                await this._activityService.delete(sub_a['activity'].activity_id, "").toPromise();
                sub_a['state']='new_sub_activity';
                this.deleteSubActivity(sub_a);
                this.generateSuperActivity(element, -1);
                await this._activityService.update(element['super']).toPromise();
              }
              else if (sub_a['state'] == 'new_sub_activity') {
                /* SUB ACTIVITY CREATION */
                //We add every new sub_activities
                isChanged = true;
                let ids = await this._activityService.createActivity(sub_a['activity']).toPromise();
                await this._unitService.bindUnitActivity(sub_a['unit'], ids['data']['activity_id']).toPromise();
                await this._jobService.bind_job_activity(old_job['data']['simple_jobs'][0]['job_id'], ids['data']['activity_id']).toPromise();
                await this._jobService.bind_job_activity(this.job_sop.job_id, ids['data']['activity_id']).toPromise();
              }
            }
            if (isChanged){
              /* SUPER ACTIVITY UPDATE */
              //We generate the super activity linked, -1 means that we already have the good idea
              this.generateSuperActivity(element, -1);
              console.log('Ok super activity now : ', element['super']);
              console.log('with this element : ', element);
              await this._activityService.update(element['super']).toPromise();
            }
          }
        }
      }
      console.log("Let's try");
      await this.generateSopActivity();
      console.log("done");
      this.router.navigate(["/sop-list"]);
    }
    catch (error) {
      this.errorMessage = error.message;
      this.ready = true;
    }
  }

  //Load every data
  async loadData(){
    //We select all units from the database
    try {
      this.errorMessage = "";
      let u = await this._unitService.selectAllFromSop(this.sop_id).toPromise();
      this.units = u['data'];
    }
    catch (error) {
      this.errorMessage = "There is no activity yet";
    }

    //We select all management levels from the database
    try {
      this.errorMessage = "";
      let m = await this._managmentService.selectAll().toPromise();
      this.management_levels = m['data'];
    }
    catch (error) {
      this.errorMessage = error.message;
    }

    //We select all activities from the sop
    try {
      this.errorMessage = "";
      let activities = await this._activityService.selectAllFromSop(this.sop_id).toPromise();

      //We sort the data
      for (let activity of activities['data']){
        if (activity.activity_id_is_father == null || activity.activity_id_is_father == ""){
          if (activity.activity_type != 'super_activity' && activity.activity_type != 'sop'){
            let unit = await this._unitService.selectAllFromActivity(activity.activity_id).toPromise();
            let e ={
              activity: activity,
              unit: unit['data'][0].unit_id,
              state: "old_activity",
              children: [],
              action: "",
              super: null
            };
            this.activities.set(activity.activity_id, e);
          }
          else if(activity.activity_type == 'sop'){
            this.activity_sop = activity as Activity;
            this.isNewSop = false;
            let j = await this._jobService.selectFromActivity(activity.activity_id).toPromise();
            this.job_sop = j['data']['sop_job'];
          }
        }
      }

      for (let activity of activities['data']) {
        if (activity.activity_id_is_father != null || activity.activity_id_is_father != ""){
          if (activity.activity_type == 'super_activity'){
            this.activities.get(activity.activity_id_is_father)['super']=activity;
          }
        }
      }

      for (let activity of activities['data']) {
        if (activity.activity_id_is_father != null && activity.activity_id_is_father != "" && activity.activity_type != "super_activity") {
          let unit = await this._unitService.selectAllFromActivity(activity.activity_id).toPromise();
          let e ={
            activity: activity,
            unit: unit['data'][0],
            state: "old_sub_activity",
          };
          this.activities.get(activity.activity_id_is_father)['children'].push(e);
        }
      }
    }
    catch (error) {
      this.errorMessage = "No activity yet";
    }
  }

  //Convert map to array to use it in the view
  convertMap(map){
    return Array.from(map.values());
  }

  //Select the activity clicked and go to its children
  selectActivity(activity){
    this.activity_selected = activity;
    this.initializeActivity(true);
    this.step = 2;

  }

  //Change the view between activity and sub activities
  changeStep(next){
    if (next && this.step<2){
      this.step++;
      this.initializeActivity(true);
    }
    else if (!next && this.step>1){
      this.step--;
      this.initializeActivity(false);
    }
  }

  addActivity(){
    //We set a fictive id and store the element;
    this.new_activity.activity_id = 'n'+this.nb_new_a;
    this.nb_new_a++;

    //We copie the element to make it unique
    let activity = JSON.parse(JSON.stringify(this.new_activity)) as Activity;
    let unit = JSON.parse(JSON.stringify(this.new_unit_id));

    //We store it as others
    let e = {
      activity: activity,
      unit: unit,
      state: "new_activity",
      children: [],
      action: ""
    };
    this.activities.set(activity.activity_id, e);
    this.initializeActivity(false);
  }

  addSubActivity(){
    //We set a fictive id and store the element;
    this.new_activity.activity_id = 'n'+this.nb_new_a;
    this.nb_new_a++;

    //We copie the element to make it unique
    let activity = JSON.parse(JSON.stringify(this.new_activity)) as Activity;
    let unit = JSON.parse(JSON.stringify(this.new_unit_id));

    //We store it as others
    let e = {
      activity: activity,
      unit: unit,
      state: "new_sub_activity",
      action: ""
    };
    this.activities.get(this.activity_selected['activity'].activity_id)['children'].push(e);
    this.initializeActivity(true);
  }

  deleteActivity(activity) {
    if (activity['state'] == 'new_activity'){
      this.activities.delete(activity['activity'].activity_id);
    }
    else {
      activity['action']='delete'
    }
  }

  deleteSubActivity(activity){
    if (activity['state'] == 'new_sub_activity'){
      let i = this.activity_selected['children'].indexOf(activity);
      this.activity_selected['children'].splice(i, 1)
    }
    else {
      activity['action']='delete'
    }
  }

  //Sort tables
  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("activiy-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  sortTable1(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("sub_activity-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  generateSuperActivity(element, id){
    if (id != -1){
      element['activity'].activity_type = "super_activity";
      element['activity'].activity_id_is_father = id;
    }
    else{
      element['super'].activity_duration = element['activity'].activity_duration;
    }

    for (let sub_a of element['children']){
      if (id == -1) {
        element['super'].activity_duration += sub_a['activity'].activity_duration;
      }
      else{
        element['activity'].activity_duration += sub_a['activity'].activity_duration;
      }
    }
  }

  async generateSopActivity(){

    let activity;
    if (this.isNewSop){
      //We get the SOP
      activity = new Activity();
      let s = await this._sopService.getSop(this.sop_id).toPromise();
      let sop = s['data'] as Sop;

      //Automatic
      activity.activity_type = "sop";
      activity.sop_id = this.sop_id;
      activity.activity_id_is_father = null;

      //Can be choosen
      activity.activity_title = sop.sop_title;
      activity.activity_description = sop.sop_objectives;

      //Calculated
      activity.activity_duration = null;

      //Need to be choosen
      activity.activity_type_output = "";
      activity.activity_shape = "";
      activity.managment_level_id = this.management_levels[0].managment_level_id.toString();
    }else{
      activity = this.activity_sop;
      console.log('act : ', this.activity_sop);
    }


    let type_duration_array = [0, 0, 0, 0];

    //We get the sorted duration inside an array
    for (let element of this.convertMap(this.activities)) {
      let i;
      if(element['activity'].activity_type_duration == 'months'){
        i=3;
      }
      else if(element['activity'].activity_type_duration == 'days'){
        i=2;
      }
      else if(element['activity'].activity_type_duration == 'hours'){
        i=1;
      }
      if(element['activity'].activity_type_duration == 'minutes'){
        i=0;
      }
      type_duration_array[i] += element['activity'].activity_duration;

      for (let sub_a of element['children']){
        if(sub_a['activity'].activity_type_duration == 'months'){
          i=3;
        }
        else if(sub_a['activity'].activity_type_duration == 'days'){
          i=2;
        }
        else if(sub_a['activity'].activity_type_duration == 'hours'){
          i=1;
        }
        if(sub_a['activity'].activity_type_duration == 'minutes'){
          i=0;
        }
        type_duration_array[i] += sub_a['activity'].activity_duration;
      }

    }

    if(type_duration_array[3]>0 || type_duration_array[2]>30){
      activity.activity_type_duration = 'months';

      activity.activity_duration = type_duration_array[3]+1;
      let more = Math.ceil(type_duration_array[2]/30);
      activity.activity_duration += more;
    }
    else if(((type_duration_array[2]>0 && type_duration_array[2]<30) || type_duration_array[1]>24) && type_duration_array[3]==0){
      activity.activity_type_duration = 'days';

      activity.activity_duration = type_duration_array[2]+1;
      let more = Math.ceil(type_duration_array[1]/24);
      activity.activity_duration += more;
    }
    else if(((type_duration_array[1]>0 && type_duration_array[1]<24) || type_duration_array[0]>60) && type_duration_array[2]==0 && type_duration_array[3]==0){
      activity.activity_type_duration = 'hours';

      activity.activity_duration = type_duration_array[1]+1;
      let more = Math.ceil(type_duration_array[0]/1440);
      activity.activity_duration += more;
    }
    else if(type_duration_array[0]<1440){
      activity.activity_type_duration = 'minutes';

      activity.activity_duration = type_duration_array[0];
    }
    else{
      activity.activity_type_duration = 'hours';

      let more = Math.ceil(type_duration_array[0]/1440);
      activity.activity_duration = more+1;
    }

    //now we create the activity if it's a new Job
    if(this.isNewSop){
      try {
        let unit_id= this.units[0].unit_id;
        let id = await this._activityService.createActivity(activity).toPromise();
        let job_id = await this._jobService.createJob(activity.activity_title,id['data']['activity_id'], this.sop_id).toPromise();
        await this._unitService.bindUnitActivity(unit_id, id['data']['activity_id']).toPromise();
        await this._jobService.bind_job_activity(job_id['data']['job_id'], id['data']['activity_id']).toPromise();
        this.isNewSop = false;
        this.job_sop = new Job();
        this.job_sop.job_id = job_id['data']['job_id'];
        activity.activity_id = id['data']['activity_id'];
        this.activity_sop = activity;
      }
      catch (error){
        this.errorMessage = error.message;
      }
    }
    else{
      try {
        await this._activityService.update(activity).toPromise();
      }
      catch (error){
        this.errorMessage = error.message;
      }
    }
  }

  verification(){
    if (this.new_activity.activity_title == ""){
      this.fieldsReady = false;
      //this.errorMessage = 'Title is required.'
    }
    else if (this.new_activity.activity_description == ""){
      this.fieldsReady = false;
      //this.errorMessage = 'Description is required.'
    }
    else if (this.new_activity.activity_type_duration == ""){
      this.fieldsReady = false;
      //this.errorMessage = 'Type duration is required.'
    }
    else if (this.new_activity.activity_duration == null){
      this.fieldsReady = false;
      //this.errorMessage = 'Duration is required.'
    }
    else if (this.new_activity.activity_type_output == ""){
      this.fieldsReady = false;
      //this.errorMessage = 'Type output is required.'
    }
    else{
      this.fieldsReady = true;
    }
  }
}
