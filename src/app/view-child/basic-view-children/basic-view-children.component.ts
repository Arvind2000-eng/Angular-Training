import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-view-children',
  templateUrl: './basic-view-children.component.html',
  styleUrls: ['./basic-view-children.component.css']
})
export class BasicViewChildrenComponent implements OnInit {
  @Input() type: string = "success";
  constructor() { }

  ngOnInit() {
  }

  alert() {
    console.log("alert");
  }
}
