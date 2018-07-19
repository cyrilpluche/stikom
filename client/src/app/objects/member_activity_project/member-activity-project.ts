export interface MemberActivityProject {
  project_id:number;
  member_id:number;
  job_id: number;
  activity_id:number;
  target_date:string;
  date_begin:string;
  evaluation:string;
  finished_date:string;
  sign:string;
  note:string;
  target_quantity:number;
  finished_quantity:number;
  finished_duration:number;
}

export class MemberActivityProject {
  project_id:number;
  member_id:number;
  job_id: number;
  activity_id:number;
  target_date:string;
  date_begin:string;
  evaluation:string;
  finished_date:string;
  sign:string;
  note:string;
  target_quantity:number;
  finished_quantity:number;
  finished_duration:number;
  constructor()
  {


  }
}

