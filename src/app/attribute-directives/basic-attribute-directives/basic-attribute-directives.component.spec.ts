import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAttributeDirectivesComponent } from './basic-attribute-directives.component';

describe('BasicAttributeDirectivesComponent', () => {
  let component: BasicAttributeDirectivesComponent;
  let fixture: ComponentFixture<BasicAttributeDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicAttributeDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
