import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmploiTempsComponent } from './register-emploi-temps.component';

describe('RegisterEmploiTempsComponent', () => {
  let component: RegisterEmploiTempsComponent;
  let fixture: ComponentFixture<RegisterEmploiTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEmploiTempsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEmploiTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
