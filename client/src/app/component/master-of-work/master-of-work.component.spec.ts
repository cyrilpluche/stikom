import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterOfWorkComponent } from './master-of-work.component';

describe('MasterOfWorkComponent', () => {
  let component: MasterOfWorkComponent;
  let fixture: ComponentFixture<MasterOfWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterOfWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterOfWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
