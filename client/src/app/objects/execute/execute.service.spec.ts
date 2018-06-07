import { TestBed, inject } from '@angular/core/testing';

import { ExecuteService } from './execute.service';

describe('ExecuteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExecuteService]
    });
  });

  it('should be created', inject([ExecuteService], (service: ExecuteService) => {
    expect(service).toBeTruthy();
  }));
});
