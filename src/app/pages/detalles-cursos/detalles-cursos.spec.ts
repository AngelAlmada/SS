import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCursos } from './detalles-cursos';

describe('DetallesCursos', () => {
  let component: DetallesCursos;
  let fixture: ComponentFixture<DetallesCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesCursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesCursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
