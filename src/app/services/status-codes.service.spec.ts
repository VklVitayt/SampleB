import { TestBed } from '@angular/core/testing';

import { StatusCodesService } from './status-codes.service';

describe('StatusCodesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusCodesService = TestBed.get(StatusCodesService);
    expect(service).toBeTruthy();
  });
});
