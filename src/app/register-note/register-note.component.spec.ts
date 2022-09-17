import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNoteComponent } from './register-note.component';

describe('RegisterNoteComponent', () => {
  let component: RegisterNoteComponent;
  let fixture: ComponentFixture<RegisterNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
