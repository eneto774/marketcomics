import { TestBed } from '@angular/core/testing';

import { ComicDetailService } from './comic-detail.service';

describe('ComicDetailService', () => {
  let service: ComicDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
