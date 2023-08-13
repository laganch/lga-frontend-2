import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeathNewApplicationComponent } from './user-death-new-application.component';

describe('UserDeathNewApplicationComponent', () => {
  let component: UserDeathNewApplicationComponent;
  let fixture: ComponentFixture<UserDeathNewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeathNewApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeathNewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
