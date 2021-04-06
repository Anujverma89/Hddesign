import { TestBed } from '@angular/core/testing';

import { ImagedataService } from './imagedata.service';

describe('ImagedataService', () => {
  let service: ImagedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
