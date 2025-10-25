import { TestBed } from '@angular/core/testing';

import { ObtenerDatos } from './obtener-datos';

describe('ObtenerDatos', () => {
  let service: ObtenerDatos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerDatos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
