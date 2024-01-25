import { TestBed } from '@angular/core/testing';

import { SharesearchqueryService } from './sharesearchquery.service';

describe('SharesearchqueryService', () => {
  let service: SharesearchqueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharesearchqueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
