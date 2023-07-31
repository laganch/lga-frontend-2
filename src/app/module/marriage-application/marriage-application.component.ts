import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ApiService } from 'src/services/api.service';
import { UploadFileService } from 'src/services/upload-file.service';

@Component({
  selector: 'app-marriage-application',
  templateUrl: './marriage-application.component.html',
  styleUrls: ['./marriage-application.component.css']
})
export class MarriageApplicationComponent {

  ApplicationForm: FormGroup;
  step:number = 1;
  groomSignature:string ="";
  isuploadin: boolean | undefined;
  message: string | undefined;


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    private _fb:FormBuilder,
    private apiService: ApiService,
    private uploadService: UploadFileService,
    ){
    this.ApplicationForm = this.initializeApplicationFormForm();
  }

  initializeApplicationFormForm(): FormGroup{
    return this.ApplicationForm = this._fb.group({
      groomFirstName: new FormControl('', [Validators.required]),
      groomLastName: new FormControl('', [Validators.required]),
      groomMiddleName: new FormControl('', [Validators.required]),
      groomAddress: new FormControl('', [Validators.required]),
      groomLandmark: new FormControl('', [Validators.required]),
      groombusstop: new FormControl('', [Validators.required]),
      groomOccupation: new FormControl('', [Validators.required]),
      brideFirstName: new FormControl('', [Validators.required]),
      brideLastName: new FormControl('', [Validators.required]),
      brideMiddleName: new FormControl('', [Validators.required]),
      brideAddress: new FormControl('', [Validators.required]),
      brideLandmark: new FormControl('', [Validators.required]),
      bridebusstop: new FormControl('', [Validators.required]),
      brideOccupation: new FormControl('', [Validators.required]),
      church: new FormControl('', [Validators.required]),
      marriageDate: new FormControl('', [Validators.required]),
      weddingDate: new FormControl('', [Validators.required]),
      brideWitnessName: new FormControl('', [Validators.required]),
      brideWitnessOccupation: new FormControl('', [Validators.required]),
      brideWitnessAddress: new FormControl('', [Validators.required]),
      GroomWitnessName: new FormControl('', [Validators.required]),
      GroomWitnessOccupation: new FormControl('', [Validators.required]),
      GroomWitnessAddress: new FormControl('', [Validators.required]),
      groomFatherFirstName: new FormControl('', [Validators.required]),
      groomFatherLastName: new FormControl('', [Validators.required]),
      groomFatherOccupation: new FormControl('', [Validators.required]),
      brideFatherFirstName: new FormControl('', [Validators.required]),
      brideFatherLastName: new FormControl('', [Validators.required]),
      brideFatherOccupation: new FormControl('', [Validators.required]),
  
    })
  }

  get appFormControl() {
    return this.ApplicationForm?.controls;
  }


  Save(){
    let data = this.ApplicationForm.value;
    data["groomSignature"]= this.groomSignature;
    const url = "/save/marriage/application";
    this.apiService.post_(url, data).subscribe(res=>{
      console.log(res)
    })
  }

  
  next(){
    this.step +=1;
  }

  back(){
    this.step -=1;
  }

  
  uploadProfile(event:any) {
    this.isuploadin = true
    let profileDocs = event.target.files;
    let currentFile = profileDocs[0];
    this.uploadService
      .Cloudupload(currentFile).pipe(
          finalize(() => {}))
            .subscribe((response:any) => {
              if(response.body){
                sessionStorage.setItem('image', JSON.stringify(response.body));
                console.log(response)
                this.isuploadin = false
              }
                },
                err => {
                    this.message = 'File not uploaded! Please check your internet connection';
                    currentFile = undefined;
                }
            );
      }
}
