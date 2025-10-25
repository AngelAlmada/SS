import { TestBed } from '@angular/core/testing';

import { FechasRegistro } from './fechas-registro';

describe('FechasRegistro', () => {
  let service: FechasRegistro;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechasRegistro);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
