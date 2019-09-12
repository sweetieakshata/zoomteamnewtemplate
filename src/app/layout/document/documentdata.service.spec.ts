import { TestBed } from '@angular/core/testing';

import { DocumentdataService } from './documentdata.service';

describe('DocumentdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentdataService = TestBed.get(DocumentdataService);
    expect(service).toBeTruthy();
  });
});
