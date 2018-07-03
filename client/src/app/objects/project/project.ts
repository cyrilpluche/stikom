export interface Project {
  project_id:string;
  project_title:string;
  project_code:string;
  project_work_code:string;
  project_start:Date;
  project_end:Date;
  sub_department_id:string;
}

export class Project {
  project_id:string;
  project_title:string;
  project_code:string;
  project_work_code:string;
  project_start:Date;
  project_end:Date;
  sub_department_id:string;
  constructor()
  {


  }
}
