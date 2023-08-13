import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOthersApplicationComponent } from './user-others-application.component';

describe('UserOthersApplicationComponent', () => {
  let component: UserOthersApplicationComponent;
  let fixture: ComponentFixture<UserOthersApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOthersApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOthersApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
