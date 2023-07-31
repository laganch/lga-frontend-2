import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Constant } from 'src/services/Constant';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  report:any

  constructor(
    private apiService: ApiService,
    ){
      this.Report();
  }
  ngOnInit(): void {
  }

  Report(){
    const url = "/report/dashboard";
    this.apiService.get(url).subscribe(res=>{
      this.report = res.data;
    })
  }
  test(){
    const url = "/settings/save/applications";
    this.apiService.post(url, "").subscribe(res=>{

    })
  }

}
