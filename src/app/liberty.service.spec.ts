import { TestBed } from '@angular/core/testing';

import { LibertyService } from './liberty.service';

describe('LibertyService', () => {
  let service: LibertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
