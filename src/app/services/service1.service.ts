import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  url="http://localhost:63533/";
  constructor(private http:HttpClient) { }

  getUsers(id:number){
    this.url=this.url+id;
    return this.http.get(this.url)
  }
  
}
