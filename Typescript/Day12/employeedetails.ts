
import {Employee} from './employee';
import {Department} from './department';

export class EmployeeDetails implements Employee
{
    fname: string;
    lname:string;
    salary:number;
    dept:Department;
    
    constructor(f:string,l:string,sal:number,role:string){
        this.fname=f;
        this.lname=l;
        this.salary=sal;
        this.dept=new Department(role);
    }
    


    display(){
        console.log(`
            ------Employee Details---------
            First Name     :: ${this.fname}
            Last Name      :: ${this.lname}
            Salary         :: ${this.salary}
            Department     :: ${this.dept.getRole()}
        `)
    }
}