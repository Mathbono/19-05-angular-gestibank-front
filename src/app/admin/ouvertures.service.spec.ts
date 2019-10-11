import { TestBed } from '@angular/core/testing';

import { OuverturesService } from './ouvertures.service';

describe('OuverturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OuverturesService = TestBed.get(OuverturesService);
    expect(service).toBeTruthy();
  });
});
