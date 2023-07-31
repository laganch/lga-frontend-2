import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneMarriageComponent } from './step-one-marriage.component';

describe('StepOneMarriageComponent', () => {
  let component: StepOneMarriageComponent;
  let fixture: ComponentFixture<StepOneMarriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepOneMarriageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepOneMarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
