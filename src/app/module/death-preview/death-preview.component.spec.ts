import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathPreviewComponent } from './death-preview.component';

describe('DeathPreviewComponent', () => {
  let component: DeathPreviewComponent;
  let fixture: ComponentFixture<DeathPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
