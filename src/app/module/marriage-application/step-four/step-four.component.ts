import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent {
  form!:FormGroup;

  constructor(
    private rootFormGroup:FormGroupDirective
  ){
  }
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
  }
}
