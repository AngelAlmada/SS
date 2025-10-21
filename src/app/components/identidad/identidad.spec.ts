import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Identidad } from './identidad';

describe('Identidad', () => {
  let component: Identidad;
  let fixture: ComponentFixture<Identidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Identidad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Identidad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
