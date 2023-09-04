import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-birth-new-application',
  templateUrl: './user-birth-new-application.component.html',
  styleUrls: ['./user-birth-new-application.component.css']
})
export class UserBirthNewApplicationComponent {


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
      babyFirstName: new FormControl('', [Validators.required]),
      babyLastName: new FormControl('', [Validators.required]),
      babyMiddleName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      fatherFirstName: new FormControl('', [Validators.required]),
      fatherLastName: new FormControl('', [Validators.required]),
      fatherMiddleName: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      lga: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      hospital: new FormControl('', [Validators.required]),
      motherFirstName: new FormControl('', [Validators.required]),
      motherLastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      relationship: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),

    })
  }

  get appFormControl() {
    return this.ApplicationForm?.controls;
  }


  Save(){
    console.log(this.ApplicationForm.value)
    const url = "/save/birth/application";
    let data = this.ApplicationForm.value;
    this.apiService.post_(url, data).subscribe(res=>{
      this.router.navigate(["/user/birth-certificate"]).then(() =>{
        location.reload();
      })
    })
  }

}
