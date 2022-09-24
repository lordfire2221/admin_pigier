import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmploisTempsComponent } from './liste-emplois-temps.component';

describe('ListeEmploisTempsComponent', () => {
  let component: ListeEmploisTempsComponent;
  let fixture: ComponentFixture<ListeEmploisTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEmploisTempsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEmploisTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
