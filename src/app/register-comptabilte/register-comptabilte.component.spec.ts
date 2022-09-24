import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComptabilteComponent } from './register-comptabilte.component';

describe('RegisterComptabilteComponent', () => {
  let component: RegisterComptabilteComponent;
  let fixture: ComponentFixture<RegisterComptabilteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComptabilteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComptabilteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
