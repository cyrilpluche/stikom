import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Activity} from "../../../objects/activity/activity";
import {Unit} from "../../../objects/unit/unit";
import {UnitService} from "../../../objects/unit/unit.service";
import {ManagmentLevel} from "../../../objects/managment_level/managment_level";

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.scss']
})
export class ActivityUpdateComponent implements OnInit {

  /* ----- Data ----- */
  @Input() title: string = "";
  @Input() activityUpdate: Activity;
  @Input() units: Unit[];
  @Input() managment_levels: ManagmentLevel[];
  @Input() link: string;
  @Input() isLinkActive: boolean;

  new_unit: Unit = new Unit();
  new_management_level: ManagmentLevel = new ManagmentLevel();
  type_durations = ['minutes', 'hours', 'days', 'months'];

  @Output() success = new EventEmitter<boolean>();

  constructor(private router: Router,
              private _unitService: UnitService) { }

  ngOnInit() {
    this.new_unit.unit_name = this.activityUpdate['activity_unit'][0];
    this.selectUnit();
    this.selectManagement();
    console.log(this.new_unit);
  }

  goDestination(link){
    if (this.isLinkActive) {
      this.router.navigate(['/',link]);
    }
    else {
      this.success.emit(true);
    }
  }

  reset(){
    this.success.emit(false);
  }

  selectUnit(){
    for (let u of this.units){
      if (u.unit_name == this.new_unit.unit_name){
        this.new_unit = u;
      }
    }
  }

  selectManagement(){
    for (let m of this.managment_levels){
      if (m.managment_level_id.toString() == this.activityUpdate.managment_level_id){
        this.new_management_level = m;
      }
    }
  }

}
