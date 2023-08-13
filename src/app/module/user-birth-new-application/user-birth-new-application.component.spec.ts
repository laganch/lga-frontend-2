import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBirthNewApplicationComponent } from './user-birth-new-application.component';

describe('UserBirthNewApplicationComponent', () => {
  let component: UserBirthNewApplicationComponent;
  let fixture: ComponentFixture<UserBirthNewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBirthNewApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBirthNewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
