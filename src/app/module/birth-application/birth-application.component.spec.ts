import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthApplicationComponent } from './birth-application.component';

describe('BirthApplicationComponent', () => {
  let component: BirthApplicationComponent;
  let fixture: ComponentFixture<BirthApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
