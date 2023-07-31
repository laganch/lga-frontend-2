import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuDashboardComponent } from './top-menu-dashboard.component';

describe('TopMenuDashboardComponent', () => {
  let component: TopMenuDashboardComponent;
  let fixture: ComponentFixture<TopMenuDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMenuDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMenuDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
