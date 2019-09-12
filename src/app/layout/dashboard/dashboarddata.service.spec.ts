import { TestBed } from '@angular/core/testing';

import { DashboarddataService } from './dashboarddata.service';

describe('DashboarddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboarddataService = TestBed.get(DashboarddataService);
    expect(service).toBeTruthy();
  });
});
