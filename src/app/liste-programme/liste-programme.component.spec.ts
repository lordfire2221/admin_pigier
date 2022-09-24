import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProgrammeComponent } from './liste-programme.component';

describe('ListeProgrammeComponent', () => {
  let component: ListeProgrammeComponent;
  let fixture: ComponentFixture<ListeProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProgrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
