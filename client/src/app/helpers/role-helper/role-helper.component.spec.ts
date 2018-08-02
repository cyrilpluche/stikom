import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleHelperComponent } from './role-helper.component';

describe('RoleHelperComponent', () => {
  let component: RoleHelperComponent;
  let fixture: ComponentFixture<RoleHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
