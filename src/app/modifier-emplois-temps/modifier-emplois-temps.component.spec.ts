import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEmploisTempsComponent } from './modifier-emplois-temps.component';

describe('ModifierEmploisTempsComponent', () => {
  let component: ModifierEmploisTempsComponent;
  let fixture: ComponentFixture<ModifierEmploisTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEmploisTempsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierEmploisTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
