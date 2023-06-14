import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPlatformRendererComponent } from './basic-platform-renderer.component';

describe('BasicPlatformRendererComponent', () => {
  let component: BasicPlatformRendererComponent;
  let fixture: ComponentFixture<BasicPlatformRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPlatformRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPlatformRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
