import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  private formData: any = {};  
  private showMessage: boolean = false;  
  registerUser(formdata: NgForm) {  
      this.formData = formdata.value;  
      this.showMessage = true;  
  }  
  constructor() { }

  ngOnInit() {
  }

}
