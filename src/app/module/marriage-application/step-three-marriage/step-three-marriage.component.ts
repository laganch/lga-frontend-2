import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-three-marriage',
  templateUrl: './step-three-marriage.component.html',
  styleUrls: ['./step-three-marriage.component.css']
})
export class StepThreeMarriageComponent {
  form!:FormGroup;

  constructor(
    private rootFormGroup:FormGroupDirective
  ){
  }
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
