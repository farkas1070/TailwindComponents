import { TestBed } from '@angular/core/testing';

import { SelectedJobService } from './selected-job.service';

describe('SelectedJobService', () => {
  let service: SelectedJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
