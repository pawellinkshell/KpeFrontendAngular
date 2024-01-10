import { TestBed } from '@angular/core/testing';

import { RemovedItemsService } from './removed-items.service';

describe('RemovedItemsService', () => {
  let service: RemovedItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemovedItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
