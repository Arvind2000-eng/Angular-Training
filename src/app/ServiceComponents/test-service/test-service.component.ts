import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../../services/user-data.service'

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent implements OnInit {
  personId:number;
users:any;
  // constructor(public userdata:Service1Service){
  //   userdata.getUsers(this.personId).subscribe((data)=>{
  //     console.warn("data",data);
  //     this.users=data});
  // }
  constructor(private userdata:UserDataService){
    console.warn("userdata",userdata.users());
    }

  ngOnInit() {
  }

}
