import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicViewChildComponent } from './basic-view-child.component';

describe('BasicViewChildComponent', () => {
  let component: BasicViewChildComponent;
  let fixture: ComponentFixture<BasicViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
