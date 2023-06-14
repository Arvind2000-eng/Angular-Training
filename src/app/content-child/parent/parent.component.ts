import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterContentInit, AfterViewInit, OnInit {

  // @ContentChild('header', { static: false, read: ElementRef }) cardHeaderData: ElementRef;
  @ContentChild('header') cardHeaderData: ElementRef;
  @ViewChild('header1') vcheader: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log("parentCompo=", this.cardHeaderData);
  }

  ngAfterContentInit(): void {
    console.log("parentCompo=", this.cardHeaderData);
    console.log("vcheader=", this.vcheader);
    // this.cardHeaderData.nativeElement.style.color = 'blue';
  }

  ngAfterViewInit(): void {
    console.log("parentCompo=", this.cardHeaderData);
  }

}
