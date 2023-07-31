import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { finalize } from 'rxjs';
import { UploadFileService } from 'src/services/upload-file.service';

@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.css']
})
export class StepSixComponent {
  form!:FormGroup;
  groomSignature:string ="";
  isuploadin: boolean | undefined;
  message: string | undefined;

  constructor(
    private rootFormGroup:FormGroupDirective,
    private uploadService: UploadFileService,
  ){
  }
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
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
