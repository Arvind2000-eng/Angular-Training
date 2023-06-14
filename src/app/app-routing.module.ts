import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './Error/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ComponentLifeCycleComponent } from './MyComponents/component-life-cycle/component-life-cycle.component';
import { EventHandlingComponent } from './MyComponents/event-handling/event-handling.component';
import { IfElseComponent } from './MyComponents/if-else/if-else.component';
import { LoopComponent } from './MyComponents/loop/loop.component';
import { NgSwitchComponent } from './MyComponents/ng-switch/ng-switch.component';
import { AttributeBindingComponent } from './MyComponents/OneWay-DataBinding/attribute-binding/attribute-binding.component';
import { InterpolationBindingComponent } from './MyComponents/OneWay-DataBinding/interpolation-binding/interpolation-binding.component';
import { CustomPipesUsageComponent } from './MyComponents/pipe/custom-pipes-usage/custom-pipes-usage.component';
import { PipeComponent } from './MyComponents/pipe/pipe.component';
import { ReactiveFormComponent } from './MyComponents/ReactiveForm/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './MyComponents/reactiveform/template-driven-form/template-driven-form.component';
import { TwoWayBindingComponent } from './MyComponents/TwoWay-DataBinding/two-way-binding/two-way-binding.component';
import { TestServiceComponent } from './ServiceComponents/test-service/test-service.component';
import { LoginComponent } from './user/login/login.component';
import { BasicContentProjectionComponent } from './content-projection/basic-content-projection/basic-content-projection.component';
import { BasicViewChildComponent } from './view-child/basic-view-child/basic-view-child.component';
import { ParentComponent } from './content-child/parent/parent.component';
import { BasicPlatformRendererComponent } from './platform-renderer/basic-platform-renderer/basic-platform-renderer.component';
import { DynamicComponent } from './dynamic-component/dynamic/dynamic.component';
import { BasicAttributeDirectivesComponent } from './attribute-directives/basic-attribute-directives/basic-attribute-directives.component';

const routes: Routes = [
  { path: 'AttributeBinding', component: AttributeBindingComponent },
  { path: 'InterPolationBinding', component:InterpolationBindingComponent },
  { path: 'ReactiveForm', component: ReactiveFormComponent },
  { path: 'TwoWayBinding', component: TwoWayBindingComponent },
  { path: 'Login', component: LoginComponent }, 
  { path: 'Loop', component: LoopComponent }, 
  { path: 'IfElse', component: IfElseComponent }, 
  { path: 'NgSwitch', component: NgSwitchComponent }, 
  { path: 'Pipe', component: PipeComponent }, 
  { path: 'ComponentLifeCycle', component: ComponentLifeCycleComponent }, 
  { path: 'CustomPipesUsage', component: CustomPipesUsageComponent }, 
  { path: 'Home', component: HomeComponent },
  { path: 'EventHandling', component: EventHandlingComponent },
  { path: 'TemplateDrivenForm', component: TemplateDrivenFormComponent },
  { path: 'TestService', component: TestServiceComponent },
  { path: 'ContentProjection', component: BasicContentProjectionComponent },
  { path: 'ViewChild', component: BasicViewChildComponent },
  { path: 'ContentChild', component: ParentComponent },
  { path: 'PlatformRenderer', component: BasicPlatformRendererComponent },
  { path: 'DynamicComponent', component: DynamicComponent },
  { path: 'AttributeDirectives', component: BasicAttributeDirectivesComponent },
  { path: '', redirectTo: 'Home', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  declarations:[
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
