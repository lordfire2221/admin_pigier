import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFiliereComponent } from './register-filiere.component';

describe('RegisterFiliereComponent', () => {
  let component: RegisterFiliereComponent;
  let fixture: ComponentFixture<RegisterFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
