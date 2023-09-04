import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../services/api.service";
import {Router} from "@angular/router";
import {PrintDto} from "../../../../sdk/lga-api-sdk";
import {DownloadService} from "../../../services/app-service/download.service";

@Component({
  selector: 'app-user-death-application',
  templateUrl: './user-death-application.component.html',
  styleUrls: ['./user-death-application.component.css']
})
export class UserDeathApplicationComponent implements OnInit{
  private printing: boolean;
  private errMessage: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ApplicationForm: FormGroup;
  applications:any[]= [];
  isloading:Boolean = false;
  count:number = 10;
  p:number = 0;
  item:number =0;

  constructor(
    private _fb:FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private downloadService:DownloadService
  ){
    this.ApplicationForm = this.initializeApplicationFormForm();
    this. DeathApplication()
  }

  initializeApplicationFormForm(): FormGroup{
    return this.ApplicationForm = this._fb.group({
      applicationId: new FormControl(''),
      deceasedLastName: new FormControl(''),
      deceasedMiddleName: new FormControl(''),
      deceasedOccupation: new FormControl(''),
      deceasedAddress: new FormControl(''),

    })
  }

  DeathApplication(){
    this.isloading = true;
    const url = "/death/assessment/search";
    let data = this.ApplicationForm.value;
    this.apiService.post_(url, data).subscribe(res=>{
      this.isloading = false;
      this.applications = res.results;

    })
  }

  Search(){
    this.DeathApplication();
  }

  getNextPage(page:any){

  }

  details(item:any){
    localStorage.setItem('items', JSON.stringify(item));
    this.router.navigate(['/user/death/application/preview'], { replaceUrl: true }).then(() =>{
      location.reload();
    })
  }

  printSingle(id:string, type:any){
    this.printing = true
    const dto:PrintDto = {
      applicationId:id,
      type:type,
    }
    let dtos:PrintDto[]  = new Array<PrintDto>();
    dtos.push(dto)
    this.print(dtos);
  }

  print(dtos:any){
    const url = "/print/marriage/certificate";
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
}
