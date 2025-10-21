import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteprincipal } from './componenteprincipal';

describe('Componenteprincipal', () => {
  let component: Componenteprincipal;
  let fixture: ComponentFixture<Componenteprincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenteprincipal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componenteprincipal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
