import { TestBed, inject } from '@angular/core/testing';

import { MemberActivityProjectService } from './member-activity-project.service';

describe('MemberActivityProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberActivityProjectService]
    });
  });

  it('should be created', inject([MemberActivityProjectService], (service: MemberActivityProjectService) => {
    expect(service).toBeTruthy();
  }));
});
