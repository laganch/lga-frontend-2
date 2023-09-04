import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-death-new-application',
  templateUrl: './user-death-new-application.component.html',
  styleUrls: ['./user-death-new-application.component.css']
})
export class UserDeathNewApplicationComponent {


  ApplicationForm: FormGroup;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    private _fb:FormBuilder,
    private apiService: ApiService,
    private router:Router
  ){
    this.ApplicationForm = this.initializeApplicationFormForm();
  }

  initializeApplicationFormForm(): FormGroup{
    return this.ApplicationForm = this._fb.group({
      deceasedFirstName: new FormControl('', [Validators.required]),
      deceasedLastName: new FormControl('', [Validators.required]),
      deceasedMiddleName: new FormControl('', [Validators.required]),
      deceasedOccupation: new FormControl('', [Validators.required]),
      deceasedAddress: new FormControl('', [Validators.required]),
      deceasedbusstop: new FormControl('', [Validators.required]),
      deceasedLandmark: new FormControl('', [Validators.required]),
      deathDate: new FormControl('', [Validators.required]),
      buriedDate: new FormControl('', [Validators.required]),
      hospital: new FormControl('', [Validators.required]),
      applicantFirstName: new FormControl('', [Validators.required]),
      applicantLastName: new FormControl('', [Validators.required]),
      applicantOccupation: new FormControl('', [Validators.required]),
      relationship: new FormControl('', [Validators.required]),
      applicantPhonenumber: new FormControl('', [Validators.required]),
      alternateNumber: new FormControl('', [Validators.required]),

    })
  }

  get appFormControl() {
    return this.ApplicationForm?.controls;
  }


  Save(){
    console.log(this.ApplicationForm.value)
    const url = "/save/death/application";
    let data = this.ApplicationForm.value;
    this.apiService.post_(url, data).subscribe(res=>{
      this.router.navigate(["/user/death-certificate"]).then(() =>{
        location.reload();
      })
    })
  }

}
