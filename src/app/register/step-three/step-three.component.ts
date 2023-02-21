import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { LoginContext } from 'src/app/models/login-context.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent {
  isLoading: boolean = false;
  errorMessage: string | null = null;
  lga:any[]=[];
  state:any[]=[];
  area:any[]=[];

  form!:FormGroup;

  constructor(
    private apiService:ApiService, 
    private rootFormGroup:FormGroupDirective,
    private router: Router,
  ){
  }
  ngOnInit(): void {
    this.form = this.rootFormGroup.control;
    this.getState();
  }

  handleRegister(){
    
  }

  getLga(){
    const url = "/lga?id="+this.form.value.stateDetails.state;
    this.apiService.get(url).subscribe(res=>{
      this.lga = res.data;
    })
  }
  getArea(){
    const url = "/area?id="+this.form.value.stateDetails.lga;
    this.apiService.get(url).subscribe(res=>{
      this.area = res.data;
    })
  }
  getState(){
    const url = "/state"
    this.apiService.get(url).subscribe(res=>{
      this.state = res.data;
    })
  }
}
