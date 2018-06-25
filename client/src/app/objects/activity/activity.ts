export interface Activity {
  activity_id:number;
  activity_title: string;
  activity_description: string;
  activity_type_duration:string;
  activity_duration:number;
  activity_type:string;
  activity_type_output:string;
  activity_shape:string;
  activity_unit_id:number;
  job_id:number;
  activity_id_is_next:number;
  sop_id:number;
}

export class Activity {
  activity_id:number;
  activity_title:string;
  activity_description: string;
  activity_type_duration:string;
  activity_duration:number;
  activity_type:string;
  activity_type_output:string;
  activity_shape:string;
  activity_unit_id:number;
  job_id:number;
  activity_id_is_next:number;
  sop_id:number;

  constructor()
  {

  }
}
