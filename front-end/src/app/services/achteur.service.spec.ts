import { TestBed } from '@angular/core/testing';

import { AchteurService } from './achteur.service';

describe('AchteurService', () => {
  let service: AchteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
