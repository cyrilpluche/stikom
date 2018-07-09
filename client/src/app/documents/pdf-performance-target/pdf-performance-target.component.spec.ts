import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPerformanceTargetComponent } from './pdf-performance-target.component';

describe('PdfPerformanceTargetComponent', () => {
  let component: PdfPerformanceTargetComponent;
  let fixture: ComponentFixture<PdfPerformanceTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPerformanceTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPerformanceTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
