import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfGanttComponent } from './pdf-gantt.component';

describe('PdfGanttComponent', () => {
  let component: PdfGanttComponent;
  let fixture: ComponentFixture<PdfGanttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfGanttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
