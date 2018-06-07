import { TestBed, inject } from '@angular/core/testing';

import { HasRoleService } from './has-role.service';

describe('HasRoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HasRoleService]
    });
  });

  it('should be created', inject([HasRoleService], (service: HasRoleService) => {
    expect(service).toBeTruthy();
  }));
});
