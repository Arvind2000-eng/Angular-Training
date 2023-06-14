import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() public message :string = '';  
  
  @Input('alert-pop') public message1 :string= ''  
  
  @Output() onSignup  = new EventEmitter<any>();  
  
    public data:any = {};  
    
    public showAlert():void{  
        alert(this.message1);  
    }  
  
    public onSubmit() :void{  
      alert("name="+ this.data.name + "email=" + this.data.email);
    }   
  constructor() { }

  ngOnInit() {
  }

}
