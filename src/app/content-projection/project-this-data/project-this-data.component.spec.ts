import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectThisDataComponent } from './project-this-data.component';

describe('ProjectThisDataComponent', () => {
  let component: ProjectThisDataComponent;
  let fixture: ComponentFixture<ProjectThisDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectThisDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectThisDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
