import { TestBed, inject } from '@angular/core/testing';

import { MemberUnitProjectService } from './member-unit-project.service';

describe('MemberUnitProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberUnitProjectService]
    });
  });

  it('should be created', inject([MemberUnitProjectService], (service: MemberUnitProjectService) => {
    expect(service).toBeTruthy();
  }));
});
