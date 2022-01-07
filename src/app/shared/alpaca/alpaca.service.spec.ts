import { TestBed } from '@angular/core/testing';

import { AlpacaService } from './alpaca.service';

describe('AlpacaService', () => {
  let service: AlpacaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlpacaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
