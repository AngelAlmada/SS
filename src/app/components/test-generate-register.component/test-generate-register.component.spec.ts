import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGenerateRegisterComponent } from './test-generate-register.component';

describe('TestGenerateRegisterComponent', () => {
  let component: TestGenerateRegisterComponent;
  let fixture: ComponentFixture<TestGenerateRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestGenerateRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestGenerateRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
