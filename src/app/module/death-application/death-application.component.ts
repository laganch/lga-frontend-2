import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-death-application',
  templateUrl: './death-application.component.html',
  styleUrls: ['./death-application.component.css']
})
export class DeathApplicationComponent implements OnInit {

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
      this.router.navigate(["/admin/dashboard"]).then(() =>{
        location.reload();
      })
    })
  }

}
