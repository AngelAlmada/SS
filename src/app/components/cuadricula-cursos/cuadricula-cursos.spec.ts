import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadriculaCursos } from './cuadricula-cursos';

describe('CuadriculaCursos', () => {
  let component: CuadriculaCursos;
  let fixture: ComponentFixture<CuadriculaCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadriculaCursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadriculaCursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
