import { TestBed } from '@angular/core/testing';

import { FundSpkService } from './fund-spk.service';

describe('FundSpkService', () => {
  let service: FundSpkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundSpkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

