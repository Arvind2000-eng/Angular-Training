import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicContentProjectionComponent } from './basic-content-projection/basic-content-projection.component';
import { ProjectThisDataComponent } from './project-this-data/project-this-data.component';

@NgModule({
  declarations: [BasicContentProjectionComponent, ProjectThisDataComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BasicContentProjectionComponent,
    ProjectThisDataComponent
  ],
})
export class ContentProjectionModule { }
