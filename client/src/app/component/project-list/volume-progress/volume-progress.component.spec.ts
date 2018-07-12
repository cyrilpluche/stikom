import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeProgressComponent } from './volume-progress.component';

describe('VolumeProgressComponent', () => {
  let component: VolumeProgressComponent;
  let fixture: ComponentFixture<VolumeProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
