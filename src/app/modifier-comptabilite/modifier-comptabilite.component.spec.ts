import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierComptabiliteComponent } from './modifier-comptabilite.component';

describe('ModifierComptabiliteComponent', () => {
  let component: ModifierComptabiliteComponent;
  let fixture: ComponentFixture<ModifierComptabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierComptabiliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierComptabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
