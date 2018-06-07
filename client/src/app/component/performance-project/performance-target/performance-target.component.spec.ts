import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTargetComponent } from './performance-target.component';

describe('PerformanceTargetComponent', () => {
  let component: PerformanceTargetComponent;
  let fixture: ComponentFixture<PerformanceTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
