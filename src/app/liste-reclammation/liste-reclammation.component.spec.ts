import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReclammationComponent } from './liste-reclammation.component';

describe('ListeReclammationComponent', () => {
  let component: ListeReclammationComponent;
  let fixture: ComponentFixture<ListeReclammationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReclammationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeReclammationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
