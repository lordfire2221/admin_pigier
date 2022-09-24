import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBulletinComponent } from './liste-bulletin.component';

describe('ListeBulletinComponent', () => {
  let component: ListeBulletinComponent;
  let fixture: ComponentFixture<ListeBulletinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBulletinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBulletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
