import { Component } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Router} from "@angular/router";
import {DownloadService} from "../../../services/app-service/download.service";
import {PrintDto} from "../../../../sdk/lga-api-sdk";
import {PaystackOptions} from "angular4-paystack";

@Component({
  selector: 'app-user-death-application-preview',
  templateUrl: './user-death-application-preview.component.html',
  styleUrls: ['./user-death-application-preview.component.css']
})
export class UserDeathApplicationPreviewComponent {
  applications:any;
  isloading:Boolean = false;
  reason: string | undefined;
  printing: boolean;
  errMessage: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private downloadService: DownloadService,
  ){
    this.DeathApplication()
  }

  get applicationItem() {
    let applicationItem = localStorage.getItem("items");
    return JSON.parse(applicationItem == null ? "{}" : applicationItem);
  }

  DeathApplication(){
    this.isloading = true;
    const url = "/death/assessment/search?aid="+this.applicationItem.applicationId;
    this.apiService.get(url).subscribe(res=>{
      this.isloading = false;
      this.applications = res.data;

    })
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
    amount: 5000000,
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
    const url = "/death/update?id="+this.applicationItem.applicationId;
    this.apiService.get(url).subscribe(res=>{
      this.isloading = false;
      this.router.navigate(['/user/death-certificate'], { replaceUrl: true }).then(() =>{
        location.reload();
      })
    }, err =>  {
      this.showErrorMessage('We are unable to print at this time')
    });
  }

  paymentCancel() {
    console.log('payment failed');
  }

}
