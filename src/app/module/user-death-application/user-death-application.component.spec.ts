import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeathApplicationComponent } from './user-death-application.component';

describe('UserDeathApplicationComponent', () => {
  let component: UserDeathApplicationComponent;
  let fixture: ComponentFixture<UserDeathApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeathApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeathApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
