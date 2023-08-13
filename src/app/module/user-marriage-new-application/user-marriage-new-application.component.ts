import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { UploadFileService } from 'src/services/upload-file.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-user-marriage-new-application',
  templateUrl: './user-marriage-new-application.component.html',
  styleUrls: ['./user-marriage-new-application.component.css']
})
export class UserMarriageNewApplicationComponent {


  ApplicationForm: FormGroup;
  step:number = 1;
  groomSignature:string ="";
  isuploadin: boolean | undefined;
  message: string | undefined;


  constructor(
    private _fb:FormBuilder,
    private apiService: ApiService,
    private uploadService: UploadFileService,
    private router:Router
    ){
    this.ApplicationForm = this.initializeApplicationFormForm();
  }

  initializeApplicationFormForm(): FormGroup{
    return this.ApplicationForm = this._fb.group({
      church: new FormControl('', [Validators.required]),
      marriageDate: new FormControl('', [Validators.required]),
      weddingDate: new FormControl('', [Validators.required]),
      brideFirstName: new FormControl('', [Validators.required]),
      brideOccupation: new FormControl('', [Validators.required]),
      brideGender: new FormControl('', [Validators.required]),
      brideLastName: new FormControl('', [Validators.required]),
      brideMiddleName: new FormControl('', [Validators.required]),
      brideAddress: new FormControl('', [Validators.required]),
      brideParentName: new FormControl('', [Validators.required]),
      brideParentAddress: new FormControl('', [Validators.required]),
      groomFatherOccupation: new FormControl('', [Validators.required]),
      groomWitnessName: new FormControl('', [Validators.required]),
      groomParentAddress: new FormControl('', [Validators.required]),
      groomParentName: new FormControl('', [Validators.required]),
      churchAddress: new FormControl('', [Validators.required]),
      priest: new FormControl('', [Validators.required]),
      brideSignature: new FormControl('', [Validators.required]),
      groomSignature: new FormControl('', [Validators.required]),
    })
  }


  Save(){
    let data = this.ApplicationForm.value;
    const url = "/save/marriage/application";
    this.apiService.post_(url, data).subscribe(res=>{

      alertify.set('notifier','position', 'top-right');
      alertify.success('Application Submitted Successfully');
      this.router.navigate(["/user/marriage-certificate"])
      .then(() =>{
        location.reload();
      })
    })
  }

}
