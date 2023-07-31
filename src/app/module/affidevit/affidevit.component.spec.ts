import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffidevitComponent } from './affidevit.component';

describe('AffidevitComponent', () => {
  let component: AffidevitComponent;
  let fixture: ComponentFixture<AffidevitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffidevitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffidevitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
