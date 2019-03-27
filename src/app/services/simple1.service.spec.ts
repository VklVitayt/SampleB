import { TestBed } from '@angular/core/testing';

import { Simple1Service } from './simple1.service';

describe('Simple1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Simple1Service = TestBed.get(Simple1Service);
    expect(service).toBeTruthy();
  });
});
