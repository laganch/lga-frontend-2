import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoMarriageComponent } from './step-two-marriage.component';

describe('StepTwoMarriageComponent', () => {
  let component: StepTwoMarriageComponent;
  let fixture: ComponentFixture<StepTwoMarriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoMarriageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTwoMarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
