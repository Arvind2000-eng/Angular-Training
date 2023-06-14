import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTestComponentComponent } from './dynamic-test-component/dynamic-test-component.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [DynamicTestComponentComponent, DynamicComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    DynamicTestComponentComponent
  ]
})
export class DynamicComponentModule { }
