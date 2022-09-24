import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNiveauComponent } from './register-niveau.component';

describe('RegisterNiveauComponent', () => {
  let component: RegisterNiveauComponent;
  let fixture: ComponentFixture<RegisterNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNiveauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
