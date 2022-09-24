import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtudiantExamenComponent } from './liste-etudiant-examen.component';

describe('ListeEtudiantExamenComponent', () => {
  let component: ListeEtudiantExamenComponent;
  let fixture: ComponentFixture<ListeEtudiantExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEtudiantExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEtudiantExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
