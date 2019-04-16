import { TestBed } from '@angular/core/testing';

import { KittenTransferService } from './kitten-transfer.service';

describe('KittenTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KittenTransferService = TestBed.get(KittenTransferService);
    expect(service).toBeTruthy();
  });
});
