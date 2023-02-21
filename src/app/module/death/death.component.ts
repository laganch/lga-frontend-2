import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.css']
})
export class DeathComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ApplicationForm: FormGroup;
  applications:[]= [];
  
  constructor(
    private _fb:FormBuilder,
    private apiService: ApiService,
    ){
    this.ApplicationForm = this.initializeApplicationFormForm();
    // this. DeathApplication()
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
    const url = "/death/assessment/search";
    let data = this.ApplicationForm.value;
    this.apiService.post_(url, data).subscribe(res=>{
      this.applications = res.results;
    })
  }

  Search(){
    this.DeathApplication();
  }

}
