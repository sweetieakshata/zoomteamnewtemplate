import { TestBed } from '@angular/core/testing';

import { DesignationdataService } from './designationdata.service';

describe('DesignationdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignationdataService = TestBed.get(DesignationdataService);
    expect(service).toBeTruthy();
  });
});
