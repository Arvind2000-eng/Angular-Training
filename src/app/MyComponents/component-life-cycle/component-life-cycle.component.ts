import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  templateUrl: './component-life-cycle.component.html',
  styleUrls: ['./component-life-cycle.component.css']
})
export class ComponentLifeCycleComponent implements OnInit {
  public val: string = "This is alert popup message"; 
  data:number;
  constructor() {
    console.log(`new - data is ${this.data}`);
   }
   keyUpFunc(val:number){
    this.data=val;
    console.log(`In key UP new - data is ${this.data}`);
   }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);  
  }
  ngOnChanges() {    
    console.log(`ngOnChanges - data is ${this.data}`);    
} 

}
