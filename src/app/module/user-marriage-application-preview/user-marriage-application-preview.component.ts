import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaystackOptions } from 'angular4-paystack';
import { PrintDto } from 'sdk/lga-api-sdk';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { LoginContext } from 'src/app/models/login-context.model';
import { ApiService } from 'src/services/api.service';
import { DownloadService } from 'src/services/app-service/download.service';

@Component({
  selector: 'app-user-marriage-application-preview',
  templateUrl: './user-marriage-application-preview.component.html',
  styleUrls: ['./user-marriage-application-preview.component.css']
})
export class UserMarriageApplicationPreviewComponent {

  profile:LoginContext | null;
  applications:any;
  isloading:Boolean = false;
  reason: string | undefined;
  printing: boolean;
  errMessage: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private downloadService: DownloadService,
    private credentialService: CredentialsService,
    ){
    this.profile = this.credentialService.credentials;
  }

  
  get applicationItem() {
    let applicationItem = localStorage.getItem("items");
    return JSON.parse(applicationItem == null ? "{}" : applicationItem);
  }

  printSingle(id:number, type:any){
    this.printing = true
    const dto:PrintDto = {
      id:id,
      type:type,
    }
    let dtos:PrintDto[]  = new Array<PrintDto>();
    dtos.push(dto)
    this.print(dtos);
  }

  print(dtos:any){
    const url = "/print/certificate";
    this.apiService.post_(url, dtos).subscribe(res=>{
    this.isloading = false;
    this.downloadService.download(res);
    }, err =>  {
      this.showErrorMessage('We are unable to print at this time')
    });
  }

  showErrorMessage(error: any) {
    this.errMessage = error;
    // this.showErrorMessageTrigger = true;
    window.scroll(0, 0);
    setTimeout(() => {
      // this.showErrorMessageTrigger = false;
    }, 5000);
  }

  options: PaystackOptions = {
    amount: 500000,
    email: 'user@mail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
   this.updateDeath();
  }
  updateDeath() {
    const url = "/marriage/update?id="+this.applicationItem.applicationId;
    this.apiService.get(url).subscribe(res=>{
      this.isloading = false;
      this.router.navigate(['/user/marriage-certificate'], { replaceUrl: true }).then(() =>{
        location.reload();
      })
    }, err =>  {
      this.showErrorMessage('We are unable to print at this time')
    });
  }

  paymentCancel() {
    alert("Cancel Payment ?")
  }

  Approval(){
    this.isloading = true;
    const url = "/general/approval?type=marriage&aid="+this.applicationItem.applicationId;
    this.apiService.get(url).subscribe(res=>{
      this.isloading = false;
      this.applications = res.data;
    this.router.navigate(['/admin/marriage-certificate'], { replaceUrl: true }).then(() =>{
      location.reload();
    })

    })
  }}

