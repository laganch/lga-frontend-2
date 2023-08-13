import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeathApplicationPreviewComponent } from './user-death-application-preview.component';

describe('UserDeathApplicationPreviewComponent', () => {
  let component: UserDeathApplicationPreviewComponent;
  let fixture: ComponentFixture<UserDeathApplicationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeathApplicationPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeathApplicationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
