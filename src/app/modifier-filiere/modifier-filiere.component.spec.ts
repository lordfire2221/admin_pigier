import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFiliereComponent } from './modifier-filiere.component';

describe('ModifierFiliereComponent', () => {
  let component: ModifierFiliereComponent;
  let fixture: ComponentFixture<ModifierFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
