import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNiveauComponent } from './liste-niveau.component';

describe('ListeNiveauComponent', () => {
  let component: ListeNiveauComponent;
  let fixture: ComponentFixture<ListeNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeNiveauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
