import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-one-marriage',
  templateUrl: './step-one-marriage.component.html',
  styleUrls: ['./step-one-marriage.component.css']
})
export class StepOneMarriageComponent {
  form!:FormGroup;


  constructor(
    private rootFormGroup:FormGroupDirective
  ){
  }
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
