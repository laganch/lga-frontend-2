import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBirthApplicationComponent } from './user-birth-application.component';

describe('UserBirthApplicationComponent', () => {
  let component: UserBirthApplicationComponent;
  let fixture: ComponentFixture<UserBirthApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBirthApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBirthApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
