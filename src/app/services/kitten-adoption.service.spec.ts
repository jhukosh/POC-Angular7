import { TestBed } from '@angular/core/testing';

import { KittenAdoptionService } from './kitten-adoption.service';

describe('KittenAdoptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KittenAdoptionService = TestBed.get(KittenAdoptionService);
    expect(service).toBeTruthy();
  });
});
