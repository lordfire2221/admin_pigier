import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMatiereComponent } from './register-matiere.component';

describe('RegisterMatiereComponent', () => {
  let component: RegisterMatiereComponent;
  let fixture: ComponentFixture<RegisterMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMatiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
