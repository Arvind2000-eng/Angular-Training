import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { BasicViewChildrenComponent } from '../basic-view-children/basic-view-children.component';

@Component({
  selector: 'app-basic-view-child',
  templateUrl: './basic-view-child.component.html',
  styleUrls: ['./basic-view-child.component.css']
})
export class BasicViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild('testView') test: ElementRef;
  @ViewChildren(BasicViewChildrenComponent) viewChildren: QueryList<BasicViewChildrenComponent>

  // @ViewChild('testtemp') tempid: ElementRef;
  constructor() { }

  ngOnInit() {
    // console.log("test=", this.test);
  }

  ngAfterViewInit(): void {
    this.test.nativeElement.innerHTML = 'test';
    console.log("test1=", this.test);
    console.log("viewChildren=", this.viewChildren);
    this.viewChildren.forEach(alertInstance => console.log("ok=", alertInstance));
    // console.log("contTemplate=", this.tempid);
  }

}
