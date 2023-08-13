import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBirthApplicationPreviewComponent } from './user-birth-application-preview.component';

describe('UserBirthApplicationPreviewComponent', () => {
  let component: UserBirthApplicationPreviewComponent;
  let fixture: ComponentFixture<UserBirthApplicationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBirthApplicationPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBirthApplicationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
