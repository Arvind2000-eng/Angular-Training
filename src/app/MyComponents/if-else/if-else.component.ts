import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {
  v1:boolean;
  constructor() {
    this.v1=true;
   }

  ngOnInit() {
  }

  changeState(){
    if(this.v1 == true){
      this.v1=false;
    }
    else{
      this.v1=true;
    }
  }

}
