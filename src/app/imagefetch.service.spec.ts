import { TestBed } from '@angular/core/testing';

import { ImagefetchService } from './imagefetch.service';

describe('ImagefetchService', () => {
  let service: ImagefetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagefetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
