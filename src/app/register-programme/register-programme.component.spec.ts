import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProgrammeComponent } from './register-programme.component';

describe('RegisterProgrammeComponent', () => {
  let component: RegisterProgrammeComponent;
  let fixture: ComponentFixture<RegisterProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterProgrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
