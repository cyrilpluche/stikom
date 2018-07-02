import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSopComponent } from './pdf-sop.component';

describe('SopComponent', () => {
  let component: PdfSopComponent;
  let fixture: ComponentFixture<PdfSopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfSopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
