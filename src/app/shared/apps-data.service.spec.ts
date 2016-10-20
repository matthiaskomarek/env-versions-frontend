/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppsDataService } from './apps-data.service';

describe('Service: AppsData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppsDataService]
    });
  });

  it('should ...', inject([AppsDataService], (service: AppsDataService) => {
    expect(service).toBeTruthy();
  }));
});
