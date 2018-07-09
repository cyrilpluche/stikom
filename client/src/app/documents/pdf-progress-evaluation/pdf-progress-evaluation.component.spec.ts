import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfProgressEvaluationComponent } from './pdf-progress-evaluation.component';

describe('PdfProgressEvaluationComponent', () => {
  let component: PdfProgressEvaluationComponent;
  let fixture: ComponentFixture<PdfProgressEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfProgressEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfProgressEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
