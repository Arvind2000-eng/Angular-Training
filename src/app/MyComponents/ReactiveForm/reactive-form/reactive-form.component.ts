import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public title:string;

  loginForm=new FormGroup({
    user: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.pattern('[0-9]+$')]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  loginUser(){
    console.log(this.loginForm.value);
  }
  constructor() {
    this.title="Reactive Form";
   }

  ngOnInit() {
  }

  get userValue(){
    return this.loginForm.get('user');
  }
  get passwordValue(){
    return this.loginForm.get('password');
  }
  get phoneValue(){
    return this.loginForm.get('phone');
  }
}
