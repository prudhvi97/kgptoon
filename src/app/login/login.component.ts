import { Component, OnInit } from '@angular/core';
import { IProgrammer } from './programmer';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationComponent } from './../registration/registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message:string;
  public programmer:IProgrammer;
  public loginForm:FormGroup;
  submitted = false

  constructor(public router:Router,public fb:FormBuilder) {
    console.log(RegistrationComponent.userlist[0]);
    this.message="";
    this.programmer = new IProgrammer();
    this.loginForm=this.fb.group({
      emailId:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.programmer = new IProgrammer();
    this.loginForm=this.fb.group({
      emailId:['',[Validators.required,Validators.email]],
      password:['',Validators.required]

    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.programmer.emailId = this.loginForm.get('emailId')?.value;
    this.programmer.password = this.loginForm.get('password')?.value;

    if(this.programmer.emailId == RegistrationComponent.userlist[0].emailId && this.programmer.password==RegistrationComponent.userlist[0].password){
      localStorage.setItem('emailId',this.programmer.emailId);
      this.router.navigate(['comics']);
    }
    else{
      this.message = "Invalid Credentials!!";
    }
 }
}
