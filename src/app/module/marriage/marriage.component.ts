import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MarriageApplicationFilter, MarriageDto, QueryResultsMarriageDto, UtilityCtrlService } from 'sdk/lga-api-sdk';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.css']
})
export class MarriageComponent implements OnInit{

  form: FormGroup;
  showErrorMessageTrigger = false;
  isLoading: boolean = false;
  working: boolean = false;
  page: any =0;
  count:number = 10;
  p:number = 0;
  item:number =0;


  searchParams: MarriageApplicationFilter | {} = {};
  queryResult!: QueryResultsMarriageDto;
  selectedLimit: number = 10;
  applications:MarriageDto[]= [];


  constructor(
    private fb: FormBuilder,
    private utility:UtilityCtrlService,
    private apiService: ApiService,
    private router: Router,
  ){

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      after: [''],
      before: [''],
      aid: [''],
      pn: [''],
      limit: [''],
      page: [''],
      area: [''],
      town: [''],
      nin: [''],
      email: [''],
    });

    // this.performSearch()
    this.DeathApplication();

  }


  DeathApplication(){
    this.isLoading = true;
    const url = "/marriage/assessment/search";
    let data = this.form.value;
    this.apiService.post_(url, data).subscribe(res=>{
      this.isLoading = false;
      this.applications = res.results;

    })
  }
  
  performSearch() {
    var newSearch = localStorage.getItem('u');
    // if (this.working) return;
    // this.working = true;
    if (newSearch == 'false') {
      this.onPageChanged({
        page: this.form.get('page').value || 1,
        itemsPerPage: this.itemsPerPage,
      });
    } else {
      this.onPageChanged({
        page: this.form.get('page').value || 1,
        itemsPerPage: this.itemsPerPage,
      });
    }
  }

  onPageChanged(event:any) {
    this.working = true;
    this.page = event.page;
    this.form.controls['page'].setValue(this.page);

    let offset = (event.page - 1) * event.itemsPerPage;
    this.search(this.form.value, offset, event.itemsPerPage).subscribe(
      (res) => {
        if (this.page != event.page) return;
        // @ts-ignore
        this.queryResult = res;
        console.log(res);

        this.getSearchParams();
        this.working = false;
        this.form.controls['limit'].setValue(event.itemsPerPage);
      },
      (err) => {
        this.working = false;
        // this.showErrorMessage('an error occurred. please try again later');
      }
    );
  }

  search(
    payload: any,
    offset: any,
    limit: any
  ): Observable<MarriageApplicationFilter> | Observable<any> {
    const params: any = { offset: offset, limit: limit };
    this.getSearchParams();
    if (payload.name) {
      params.name = payload.name;
    }
    Object.keys(payload).forEach((it) => {
      if (!payload[it]) {
        return;
      }
      params[it] = payload[it];
    });
    return this.utility.getMarriageAssessment({ filter: params });
  }

  getSearchParams() {
    const data = Object.assign({}, this.form.value);
    delete data['page'];
    delete data['limit'];

    Object.keys(data).map((key) => {
      if (!data[key]) {
        delete data[key];
      }
    });
    this.searchParams = data;
  }

  get itemsPerPage() {
    return this.selectedLimit;
  }

  details(item:any){
    localStorage.setItem('items', JSON.stringify(item));
    this.router.navigate(['/admin/death-preview'], { replaceUrl: true }).then(() =>{
      location.reload();
    })
  }

}
