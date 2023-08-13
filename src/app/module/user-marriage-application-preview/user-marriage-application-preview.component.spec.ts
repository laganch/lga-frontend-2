import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMarriageApplicationPreviewComponent } from './user-marriage-application-preview.component';

describe('UserMarriageApplicationPreviewComponent', () => {
  let component: UserMarriageApplicationPreviewComponent;
  let fixture: ComponentFixture<UserMarriageApplicationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMarriageApplicationPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMarriageApplicationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
