export interface Activity {
  activity_id:string;
  activity_title: string;
  activity_description: string;
  activity_type_duration:string;
  activity_duration:number;
  activity_type:string;
  activity_type_output:string;
  activity_shape:string;
  activity_id_is_father:string;
  sop_id:string;
  managment_level_id:string;
}

export class Activity {
  activity_id:string;
  activity_title:string;
  activity_description: string;
  activity_type_duration:string;
  activity_duration:number;
  activity_type:string;
  activity_type_output:string;
  activity_shape:string;
  activity_id_is_father:string;
  sop_id:string;
  managment_level_id:string;

  constructor()
  {

  }
}
