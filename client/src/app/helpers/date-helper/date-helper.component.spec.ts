import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateHelperComponent } from './date-helper.component';

describe('DateHelperComponent', () => {
  let component: DateHelperComponent;
  let fixture: ComponentFixture<DateHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
