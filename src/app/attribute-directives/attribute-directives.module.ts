import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicAttributeDirectivesComponent } from './basic-attribute-directives/basic-attribute-directives.component';
import { CreditCardDirective } from './credit-card.directive';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [BasicAttributeDirectivesComponent, CreditCardDirective, TooltipDirective],
  imports: [
    CommonModule
  ]
})
export class AttributeDirectivesModule { }
