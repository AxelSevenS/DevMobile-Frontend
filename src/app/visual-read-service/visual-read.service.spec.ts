import { TestBed } from '@angular/core/testing';

import { VisualReadService } from './visual-read.service';

describe('VisualReadService', () => {
  let service: VisualReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
