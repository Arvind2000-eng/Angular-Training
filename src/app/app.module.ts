import { BrowserModule } from '@angular/platform-browser';
import { ContentChild, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationBindingComponent } from './MyComponents/OneWay-DataBinding/interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './MyComponents/OneWay-DataBinding/property-binding/property-binding.component';
import { AttributeBindingComponent } from './MyComponents/OneWay-DataBinding/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './MyComponents/OneWay-DataBinding/class-binding/class-binding.component';
import { StyleBindingComponent } from './MyComponents/OneWay-DataBinding/style-binding/style-binding.component';
import { TwoWayBindingComponent } from './MyComponents/TwoWay-DataBinding/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './MyComponents/ReactiveForm/reactive-form/reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './Error/page-not-found/page-not-found.component';
import { EventHandlingComponent } from './MyComponents/event-handling/event-handling.component';
import { LoopComponent } from './MyComponents/loop/loop.component';
import { IfElseComponent } from './MyComponents/if-else/if-else.component';
import { NgSwitchComponent } from './MyComponents/ng-switch/ng-switch.component';
import { PipeComponent } from './MyComponents/pipe/pipe.component';
import { CustomPipesUsageComponent } from './MyComponents/pipe/custom-pipes-usage/custom-pipes-usage.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ComponentLifeCycleComponent } from './MyComponents/component-life-cycle/component-life-cycle.component';
import { ChildComponent } from './MyComponents/event-handling/child/child.component';
import { TemplateDrivenFormComponent } from './MyComponents/reactiveform/template-driven-form/template-driven-form.component';
import { TestServiceComponent } from './ServiceComponents/test-service/test-service.component';
import { HttpClientModule } from '@angular/common/http';
import { TestService1Component } from './ServiceComponents/test-service1/test-service1.component';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { BasicContentProjectionComponent } from './content-projection/basic-content-projection/basic-content-projection.component';
import { ViewChildModule } from './view-child/view-child.module';
import { ContentChildModule } from './content-child/content-child.module';
import { PlatformRendererModule } from './platform-renderer/platform-renderer.module';
import { DynamicComponentModule } from './dynamic-component/dynamic-component.module';
import { AttributeDirectivesModule } from './attribute-directives/attribute-directives.module';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    TwoWayBindingComponent,
    ReactiveFormComponent,
    HomeComponent,
    PageNotFoundComponent,
    EventHandlingComponent,
    LoopComponent,
    IfElseComponent,
    NgSwitchComponent,
    PipeComponent,
    CustomPipesUsageComponent,
    UsdInrPipe,
    ComponentLifeCycleComponent,
    ChildComponent,
    TemplateDrivenFormComponent,
    TestServiceComponent,
    TestService1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule,
    ContentProjectionModule,
    ViewChildModule,
    ContentChildModule,
    PlatformRendererModule,
    DynamicComponentModule,
    AttributeDirectivesModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
