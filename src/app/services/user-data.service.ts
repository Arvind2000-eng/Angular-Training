import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return [
      {name:'u1', age:1, email:'u1@gmail.com'},
      {name:'u2', age:2, email:'u2@gmail.com'},
      {name:'u3', age:3, email:'u3@gmail.com'},
      {name:'u4', age:4, email:'u4@gmail.com'}
    ]
  }
}
