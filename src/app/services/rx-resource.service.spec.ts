import { TestBed } from '@angular/core/testing';

import { RxResourceService } from './rx-resource.service';

describe('RxResourceService', () => {
  let service: RxResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
