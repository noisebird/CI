import { TestBed } from '@angular/core/testing';

import { InjectLevelService } from './inject-level.service';

describe('InjectLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InjectLevelService = TestBed.get(InjectLevelService);
    expect(service).toBeTruthy();
  });
});
