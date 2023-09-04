import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css']
})
export class BirthComponent implements OnInit{

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
    ){
    this.ApplicationForm = this.initializeApplicationFormForm();
    this. BirthApplication()
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

  BirthApplication(){
    this.isloading = true;
    const url = "/birth/assessment/search";
    let data = this.ApplicationForm.value;
    this.apiService.post_(url, data).subscribe(res=>{
      this.isloading = false;
      this.applications = res.results;

    })
  }

  Search(){
    this.BirthApplication();
  }

  getNextPage(page:any){

  }

  details(item:any){
    localStorage.setItem('items', JSON.stringify(item));
    this.router.navigate(['/admin/birth-preview'], { replaceUrl: true }).then(() =>{
      location.reload();
    })
  }
}
