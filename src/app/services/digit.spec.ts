import { TestBed } from '@angular/core/testing';

import { Digit } from './digit';

describe('Digit', () => {
  let service: Digit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Digit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
