import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttCreationComponent } from './gantt-creation.component';

describe('GanttCreationComponent', () => {
  let component: GanttCreationComponent;
  let fixture: ComponentFixture<GanttCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanttCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanttCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
