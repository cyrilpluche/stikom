import { TestBed, inject } from '@angular/core/testing';

import { ManagmentLevelService } from './managment-level.service';

describe('ManagmentLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagmentLevelService]
    });
  });

  it('should be created', inject([ManagmentLevelService], (service: ManagmentLevelService) => {
    expect(service).toBeTruthy();
  }));
});
