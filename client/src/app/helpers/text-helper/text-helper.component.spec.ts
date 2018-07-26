import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHelperComponent } from './text-helper.component';

describe('TextHelperComponent', () => {
  let component: TextHelperComponent;
  let fixture: ComponentFixture<TextHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
