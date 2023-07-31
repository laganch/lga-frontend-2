import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { UploadFileService } from 'src/services/upload-file.service';

@Component({
  selector: 'app-application-setting',
  templateUrl: './application-setting.component.html',
  styleUrls: ['./application-setting.component.css']
})
export class ApplicationSettingComponent {

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
      contact: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      lgaSlogan: new FormControl('', [Validators.required]),
      appName: new FormControl('', [Validators.required]),
      alternate: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    })
  }

  get appFormControl() {
    return this.ApplicationForm?.controls;
  }
  
  Save(){
    let data = this.ApplicationForm.value;
    console.log(data)
    return
    const url = "/save/marriage/application";
    this.apiService.post_(url, data).subscribe(res=>{
      console.log(res)
    })
  }

}
