import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicViewChildComponent } from './basic-view-child/basic-view-child.component';
import { BasicViewChildrenComponent } from './basic-view-children/basic-view-children.component';

@NgModule({
  declarations: [BasicViewChildComponent, BasicViewChildrenComponent],
  imports: [
    CommonModule
  ],
})
export class ViewChildModule { }
