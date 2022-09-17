import { TestBed } from '@angular/core/testing';

import { StorageBulletinService } from './storage-bulletin.service';

describe('StorageBulletinService', () => {
  let service: StorageBulletinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageBulletinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
