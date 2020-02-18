import { TestBed } from '@angular/core/testing';

import { PlacementServiceService } from './placement-service.service';

describe('PlacementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacementServiceService = TestBed.get(PlacementServiceService);
    expect(service).toBeTruthy();
  });
});
