import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPerformanceReportComponent } from './pdf-performance-report.component';

describe('PdfPerformanceReportComponent', () => {
  let component: PdfPerformanceReportComponent;
  let fixture: ComponentFixture<PdfPerformanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPerformanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPerformanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
