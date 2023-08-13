import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMarriageApplicationComponent } from './user-marriage-application.component';

describe('UserMarriageApplicationComponent', () => {
  let component: UserMarriageApplicationComponent;
  let fixture: ComponentFixture<UserMarriageApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMarriageApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMarriageApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
