import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipesUsageComponent } from './custom-pipes-usage.component';

describe('CustomPipesUsageComponent', () => {
  let component: CustomPipesUsageComponent;
  let fixture: ComponentFixture<CustomPipesUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPipesUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipesUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
