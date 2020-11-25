import { TestBed } from '@angular/core/testing';

import { SchedulingValidatorService } from './scheduling-validator.service';

describe('SchedulingValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchedulingValidatorService = TestBed.get(SchedulingValidatorService);
    expect(service).toBeTruthy();
  });
});
