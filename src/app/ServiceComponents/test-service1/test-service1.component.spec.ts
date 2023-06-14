import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestService1Component } from './test-service1.component';

describe('TestService1Component', () => {
  let component: TestService1Component;
  let fixture: ComponentFixture<TestService1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestService1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
