import { TestBed } from '@angular/core/testing';

import { ConfiguratorDataService } from './configurator-data.service';

describe('ConfiguratorDataService', () => {
  let service: ConfiguratorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguratorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
