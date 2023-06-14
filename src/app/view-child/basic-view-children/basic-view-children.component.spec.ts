import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicViewChildrenComponent } from './basic-view-children.component';

describe('BasicViewChildrenComponent', () => {
  let component: BasicViewChildrenComponent;
  let fixture: ComponentFixture<BasicViewChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicViewChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicViewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
