import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTestComponentComponent } from './dynamic-test-component.component';

describe('DynamicTestComponentComponent', () => {
  let component: DynamicTestComponentComponent;
  let fixture: ComponentFixture<DynamicTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
