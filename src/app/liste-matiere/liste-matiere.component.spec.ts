import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMatiereComponent } from './liste-matiere.component';

describe('ListeMatiereComponent', () => {
  let component: ListeMatiereComponent;
  let fixture: ComponentFixture<ListeMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMatiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
