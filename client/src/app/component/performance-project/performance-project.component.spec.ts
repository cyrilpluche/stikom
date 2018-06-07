import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceProjectComponent } from './performance-project.component';

describe('PerformanceProjectComponent', () => {
  let component: PerformanceProjectComponent;
  let fixture: ComponentFixture<PerformanceProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
