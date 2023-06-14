import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective {
  tooltipelement = document.createElement('div');

  @Input() set tooltip(value){
    console.log("tooltip value = ", value);
    this.tooltipelement.textContent = value;
  }

  hide() {
    console.log("hide");
    this.tooltipelement.classList.remove('tooltip');
  }

  show() {
    console.log("show");
    this.tooltipelement.classList.add('tooltip');
  }
  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.tooltipelement.className = 'tooltip';
    console.log("tooltipelement=", this.tooltipelement);
    this.elementRef.nativeElement.append(this.tooltipelement);
    // this.elementRef.nativeElement.classList.add('tooltip-container');
  }
}
