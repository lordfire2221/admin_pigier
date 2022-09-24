import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecomptableComponent } from './listecomptable.component';

describe('ListecomptableComponent', () => {
  let component: ListecomptableComponent;
  let fixture: ComponentFixture<ListecomptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecomptableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListecomptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
