import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeMarriageComponent } from './step-three-marriage.component';

describe('StepThreeMarriageComponent', () => {
  let component: StepThreeMarriageComponent;
  let fixture: ComponentFixture<StepThreeMarriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepThreeMarriageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepThreeMarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
