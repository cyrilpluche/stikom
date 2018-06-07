import { TestBed, inject } from '@angular/core/testing';

import { SopNeedsUnitService } from './sop-needs-unit.service';

describe('SopNeedsUnitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SopNeedsUnitService]
    });
  });

  it('should be created', inject([SopNeedsUnitService], (service: SopNeedsUnitService) => {
    expect(service).toBeTruthy();
  }));
});
