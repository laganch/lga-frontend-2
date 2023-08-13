import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { LoginContext } from 'src/app/models/login-context.model';
import { Constant } from 'src/services/Constant';
import { ApiService } from 'src/services/api.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private apiService:ApiService, 
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private credentialsService: CredentialsService,
    private auth:AuthService
  ){
    this.loginForm = this.initializeUserForm();
  }
  ngOnInit(): void {
  }

  initializeUserForm(): FormGroup {
    return this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });
  }

  
  get myFormControl() {
    return this.loginForm?.controls;
  }
  
  getLandingPage(loginContext: LoginContext) {
    const roles = loginContext.role;
    let landing = '';
    loginContext.userType = '';
    if (roles=='ADMIN') {
        loginContext.userType = 'ADMIN';
        landing = '/admin/dashboard';
    } else if (roles=='USER') {
        loginContext.userType = 'USER';
        landing = '/user/dashboard';
    }
    this.credentialsService.updateCredentials(loginContext);
    localStorage.setItem(Constant.LOGGED_IN_USER, loginContext.token);
    localStorage.setItem(Constant.USER_DATA, JSON.stringify(loginContext))
    return landing;
}

  handleLogin() {
    this.isLoading = true;
    const data = this.loginForm.value;
        this.authenticationService.login(data, true).subscribe(
            response => {
              if(response.data == null){
                  alertify.set('notifier','position', 'top-right');
                  alertify.error('Username or Password Incorrect');
                  return;
              }
                  const url = this.route.snapshot.queryParams['redirect'] || this.getLandingPage(response.data);
                  window.location.href = url;
                  this.getLandingPage(response.data);
                  
            },
            error => {
                this.isLoading = false;
                this.loginForm.reset();
                this.errorMessage = 'Username or password incorrect!';
                this.isLoading = false;
              alertify.set('notifier','position', 'top-right');
              alertify.error('Username or Password Incorrect');
            }
        );
    }
}
