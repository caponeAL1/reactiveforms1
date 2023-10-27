import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms1';
  userList:any =[];
  getUserList:any=[];
  show:number=0;
  getShow:number=0;
  onSubmit(value: any) {
    this.userList.push(value.value);
    console.log(value.value);
  }
  onDelete(userForm: any){
    console.log(userForm.value.firstName);
    for(let i=0;i<this.userList.length;i++){
      if(this.userList[i].firstName==userForm.value.firstName){
        this.userList.splice(i,1);
      }
    }
    this.getUserList=[];
  }
  onUpdate(userForm: any){
    for(let i=0;i<this.userList.length;i++){
      if(this.userList[i].firstName==userForm.value.firstName){
        this.userList[i].firstName = userForm.value.firstName;
        this.userList[i].lastName = userForm.value.lastName;
        this.userList[i].joinDate = userForm.value.joinDate;
        this.userList[i].salary = userForm.value.salary;
        console.log(this.userList[i]);
      }
    }
  }
  addUser(){
    if(this.userForm.valid)
    { 
    console.log(this.userForm.value);
     this.userList.push(this.userForm.value);
  }else
   {
     console.log('validation error');
   }
  }
  //  axios.prototype.post('http://localhost:4200/insert',
  //  this.userForm.value)
  //  .then(res=>console.log(res));

  userForm:any=new FormGroup({
    firstName:new FormControl('unknown', [Validators.required,Validators.minLength(5), Validators.maxLength(9),Validators.required]),
    lastName :new FormControl('unknown', [Validators.required,Validators.minLength(1), Validators.maxLength(50)]),
    joinDate: new FormControl('03-01-2020',[Validators.required]),
    salary: new FormControl(3000,[Validators.min(3000),Validators.max(100000),Validators.required])
  
  },
  {
    updateOn:'change'
  }
  );
}
