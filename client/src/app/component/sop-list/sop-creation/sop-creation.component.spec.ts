import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SopCreationComponent } from './sop-creation.component';

describe('SopCreationComponent', () => {
  let component: SopCreationComponent;
  let fixture: ComponentFixture<SopCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SopCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
