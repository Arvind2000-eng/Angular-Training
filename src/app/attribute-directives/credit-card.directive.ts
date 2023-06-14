import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
  @HostBinding('style.border') // binding stype->border property of of host component.
  border : string;
  @HostListener('input', ['$event']) //(event, dollar event)
  anyFunctionNameHere(event: KeyboardEvent){
    const inputdata = event.target as HTMLInputElement;
    let trimed = inputdata.value.replace(/\s+/g, '');
    if(trimed.length > 16) {
      trimed = trimed.substring(0, 16);
    }

    let numbers = [];
    for (let i= 0; i < trimed.length; i+=4){
      numbers.push(trimed.substring(i,i+4));
    }

    inputdata.value = numbers.join(' ');
    console.log("target = ", inputdata.value);
    console.log("keyboard event = ", event);

    this.border = '';
    if(/[^\d]+/.test(trimed)) {
      this.border = '3px solid red';
    }
  }
  constructor(private element: ElementRef) {
    console.log("element=", element);
  }
}
