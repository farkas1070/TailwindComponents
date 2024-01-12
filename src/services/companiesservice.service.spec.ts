import { TestBed } from '@angular/core/testing';

import { CompaniesserviceService } from './companiesservice.service';

describe('CompaniesserviceService', () => {
  let service: CompaniesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
