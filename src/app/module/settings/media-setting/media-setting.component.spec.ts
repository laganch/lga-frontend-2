import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSettingComponent } from './media-setting.component';

describe('MediaSettingComponent', () => {
  let component: MediaSettingComponent;
  let fixture: ComponentFixture<MediaSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
