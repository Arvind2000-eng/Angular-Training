import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css']
})
export class EventHandlingComponent implements OnInit {
  textBox1Val:string;
  textBox2Val:string;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
    {value: 'hotdog-3', viewValue: 'Hotdog'}
  ];
  constructor() { }
  onClick(){
    alert('You Have Clicked this Function');
  }
  onChangeText(val1: string,val2:string){
    this.textBox1Val=val1;
    this.textBox2Val=val2;
  }
  change(event: any) {
    if(event.isUserInput) {
      console.log(event.source.value, event.source.selected);
    }
  }

  ngOnInit() {
  }

  public val: string = "This is alert popup message";  
  
  public onSignup(data:any):void{  
    let strMessage:string ="Thanks for Signup " + data.name + ". ";  
    strMessage += "Email id " + data.email + " has been registered successfully.";  
    alert(strMessage);  
  }  


}
