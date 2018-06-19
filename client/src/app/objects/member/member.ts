
export interface Member {
  member_id:number;
  member_first_name:string;
  member_name:string;
  member_mail:string;
  member_password:string;
  member_admin:number;
  member_valid:number;
  sub_department_id:number;
}

export class Member {
  member_id:number;
  member_first_name:string;
  member_name:string;
  member_mail:string;
  member_password:string;
  member_admin:number;
  member_valid:number;
  sub_department_id:number;
  constructor()
  {


  }
}
