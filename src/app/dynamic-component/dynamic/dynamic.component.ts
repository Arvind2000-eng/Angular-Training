import { AfterContentInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, ComponentRef, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DynamicTestComponentComponent } from '../dynamic-test-component/dynamic-test-component.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
  // changeDetection: ChangeDetectionStrategy.Default
})
export class DynamicComponent implements OnInit, AfterContentInit {

  component: ComponentRef<DynamicTestComponentComponent>;
  @ViewChild('ref', { read : ViewContainerRef}) replace: ViewContainerRef;
  @ViewChild('tempref') template: TemplateRef<any>;

  contextVeriable = {
    $implicit: 'context name',
    location: 'context location',
  }

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    const compFactory = this.resolver.resolveComponentFactory(DynamicTestComponentComponent);
    this.replace.createEmbeddedView(this.template, {
      $implicit: 'now name', // this block is for template-context
      location: 'location work',
      testvar1: 'this is test var 1'
    }); //created first component with index-0 (template view container reference example)
    this.replace.createComponent(compFactory); //created first component with index-1
    this.component = this.replace.createComponent(compFactory, 0);
    this.component.instance.title = 'Title of Dynamic Component Index-0'; //created first component with index-2
    // this.replace.insert = component;
  }

  destroyComponent() {
    console.log("component=", this.component);
    this.component.destroy();
  }

  changeOrderComponent() {
    this.replace.move(this.component.hostView, 1);
  }
}
