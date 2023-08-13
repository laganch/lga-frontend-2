import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAffidevitApplicationComponent } from './user-affidevit-application.component';

describe('UserAffidevitApplicationComponent', () => {
  let component: UserAffidevitApplicationComponent;
  let fixture: ComponentFixture<UserAffidevitApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAffidevitApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAffidevitApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
