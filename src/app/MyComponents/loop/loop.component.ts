import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {
  title = 'For Loop';
  users = ['user1','user2','user3','user4','user5','user6'];
  constructor() { }

  ngOnInit() {
  }

}
