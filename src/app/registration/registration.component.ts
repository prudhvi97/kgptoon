import { Component, OnInit } from '@angular/core';
import { Programmer } from './../model/Programmer';
import { Router, CanActivate } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public programmer: Programmer;
  public form: FormGroup;
  static userlist: Programmer[]= [];
  submitted = false;

  constructor(public router:Router,public fb:FormBuilder) { 
    this.programmer= new Programmer;
    this.form=this.fb.group({
      userName:['',Validators.required],
      emailId:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  

  ngOnInit()  {
    this.programmer= new Programmer;
    this.form=this.fb.group({
      userName:['',Validators.required],
      emailId:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  get f() { return this.form.controls; }

  public onSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
     this.programmer.userName=this.form.get('userName')?.value;
     this.programmer.emailId=this.form.get('emailId')?.value;
     this.programmer.password=this.form.get('password')?.value;

     RegistrationComponent.userlist.push(this.programmer);
     console.log(RegistrationComponent.userlist[0]);

    this.router.navigate(['login']);
  }

}
