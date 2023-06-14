import { AfterContentInit, Component, ContentChild, ContentChildren, Directive, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-basic-content-projection',
  templateUrl: './basic-content-projection.component.html',
  styleUrls: ['./basic-content-projection.component.css']
})


// @Directive({selector: 'child-directive'})
// export class ChildDirective {
// }

// @Directive({selector: 'someDir'})

export class BasicContentProjectionComponent implements OnInit {

  // @ContentChild(ChildDirective) contentChildren: QueryList<ChildDirective>;

  // ngAfterContentInit() {
  //   console.log("contentChildren=", this.contentChildren);
  // }

  constructor() { }

  ngOnInit() {
  }

}
