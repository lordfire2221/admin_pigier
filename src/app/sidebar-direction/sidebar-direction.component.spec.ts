import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDirectionComponent } from './sidebar-direction.component';

describe('SidebarDirectionComponent', () => {
  let component: SidebarDirectionComponent;
  let fixture: ComponentFixture<SidebarDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarDirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
