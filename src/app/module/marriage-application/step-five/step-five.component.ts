import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.css']
})
export class StepFiveComponent {
  form!:FormGroup;

  constructor(
    private rootFormGroup:FormGroupDirective
  ){
  }
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
