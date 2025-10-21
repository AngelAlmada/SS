import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listacursos } from './listacursos';

describe('Listacursos', () => {
  let component: Listacursos;
  let fixture: ComponentFixture<Listacursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listacursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listacursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
