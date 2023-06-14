import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-test-component',
  templateUrl: './dynamic-test-component.component.html',
  styleUrls: ['./dynamic-test-component.component.css']
})
export class DynamicTestComponentComponent implements OnInit {

  title = 'initial Title';
  constructor() { }

  ngOnInit() {
  }

}
