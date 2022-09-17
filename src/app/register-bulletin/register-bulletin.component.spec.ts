import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBulletinComponent } from './register-bulletin.component';

describe('RegisterBulletinComponent', () => {
  let component: RegisterBulletinComponent;
  let fixture: ComponentFixture<RegisterBulletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBulletinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
