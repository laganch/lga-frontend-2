import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMarriageNewApplicationComponent } from './user-marriage-new-application.component';

describe('UserMarriageNewApplicationComponent', () => {
  let component: UserMarriageNewApplicationComponent;
  let fixture: ComponentFixture<UserMarriageNewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMarriageNewApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMarriageNewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
