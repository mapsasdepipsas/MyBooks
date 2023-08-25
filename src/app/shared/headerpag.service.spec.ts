import { TestBed } from '@angular/core/testing';

import { HeaderpagService } from './headerpag.service';

describe('HeaderpagService', () => {
  let service: HeaderpagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderpagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
