import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierBulletinComponent } from './modifier-bulletin.component';

describe('ModifierBulletinComponent', () => {
  let component: ModifierBulletinComponent;
  let fixture: ComponentFixture<ModifierBulletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierBulletinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
