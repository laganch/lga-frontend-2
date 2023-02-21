import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { LoginContext } from 'src/app/models/login-context.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  isLoading: boolean = false;
  errorMessage: string | null = null;
  OneData:any[]=[];
  step:number = 1;
  mainForm!: FormGroup;
  constructor(
    private apiService:ApiService, 
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private credentialsService: CredentialsService,
    private fb:FormBuilder
  ){
   
  }
  ngOnInit(): void {
    this.ParentForm();
  }

  ParentForm(){
    this.mainForm=this.fb.group({
      loginDetails:this.fb.group({
        userName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        cpassword: new FormControl('')
      }),
      basicDetails:this.fb.group({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        otherNames: new FormControl(''),
        phoneNumber: new FormControl('')
      }),
      stateDetails:this.fb.group({
        state: new FormControl('', Validators.required),
        lga: new FormControl('', Validators.required),
        area: new FormControl('', Validators.required)
      })
    });
  }

  next(){
    this.step +=1;
  }

  back(){
    this.step -=1;
  }

  save(){
    const url = '/create';
    let data = this.mainForm.value.basicDetails;
    data["lga"]=this.mainForm.value.stateDetails.lga;
    data["state"]=this.mainForm.value.stateDetails.state;
    data["area"]=this.mainForm.value.stateDetails.area;
    data["email"]=this.mainForm.value.loginDetails.userName;
    data["password"]=this.mainForm.value.loginDetails.password;
    data["role"]="GENERAL_USER";
    this.apiService.post(url, data).subscribe(res=>{
      console.log(res)
    })
  }

}
