import { TestBed } from '@angular/core/testing';

import { StorageProgrammeService } from './storage-programme.service';

describe('StorageProgrammeService', () => {
  let service: StorageProgrammeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageProgrammeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
