import { TestBed, inject } from '@angular/core/testing';

import { SopService } from './sop.service';

describe('SopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SopService]
    });
  });

  it('should be created', inject([SopService], (service: SopService) => {
    expect(service).toBeTruthy();
  }));
});
