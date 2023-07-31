import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthPreviewComponent } from './birth-preview.component';

describe('BirthPreviewComponent', () => {
  let component: BirthPreviewComponent;
  let fixture: ComponentFixture<BirthPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
