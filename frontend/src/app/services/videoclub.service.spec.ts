import { TestBed } from '@angular/core/testing';

import { VideoclubService } from './videoclub.service';

describe('VideoclubService', () => {
  let service: VideoclubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoclubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
