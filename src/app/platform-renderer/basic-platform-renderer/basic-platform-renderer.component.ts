import { AfterViewInit, Component, ElementRef, OnInit, Renderer, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic-platform-renderer',
  templateUrl: './basic-platform-renderer.component.html',
  styleUrls: ['./basic-platform-renderer.component.css']
})
export class BasicPlatformRendererComponent implements OnInit, AfterViewInit {

  @ViewChild('templateRef') testIn: ElementRef;
  constructor(private renderer: Renderer) { }

  ngOnInit() {
    // console.log("testIn=", this.testIn.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log("testIn=", this.testIn.nativeElement);
    this.renderer.setElementAttribute(this.testIn.nativeElement, 'placeholder', 'please enter text');
    this.renderer.invokeElementMethod(this.testIn.nativeElement, 'focus');
  }

}
