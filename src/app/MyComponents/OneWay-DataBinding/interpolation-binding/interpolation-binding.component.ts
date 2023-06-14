import { Component, OnInit } from '@angular/core';

export interface Place {
  city: string;
  state: string;
  country: string;
  zipcode: string;
  visited: boolean;
};

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css'],
  //template:'<div>ok</div>'
})

export class InterpolationBindingComponent implements OnInit {

  public BindingName: string;
  public place:Place;
  public alertClass: string = 'alert alert-success';
  constructor() {
    this.BindingName="Interpolation";
    this.place = {
      city: 'Hyderabad',
      state: 'Telengana',
      country: 'India',
      zipcode: '123',
      visited: true
     };
   }
   get f1(){
      return this.BindingName.toUpperCase();
   };
   myFunction(): void { 
    alert('Show alert!'); 
  } 
   


  ngOnInit() {
  }

}
