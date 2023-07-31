import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-two-marriage',
  templateUrl: './step-two-marriage.component.html',
  styleUrls: ['./step-two-marriage.component.css']
})
export class StepTwoMarriageComponent {
  form!:FormGroup;

  constructor(
    private rootFormGroup:FormGroupDirective
  ){
  }
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
