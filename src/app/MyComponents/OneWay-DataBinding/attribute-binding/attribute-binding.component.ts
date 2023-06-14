import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {
  public isUnchanged:boolean;
  public itemImageUrl:string;
  constructor() {
    this.isUnchanged=true;
    this.itemImageUrl='src\Screenshot (26).png';
   }

  ngOnInit() {
  }

}
