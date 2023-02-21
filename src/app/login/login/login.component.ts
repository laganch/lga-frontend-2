import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { LoginContext } from 'src/app/models/login-context.model';
import { ApiService } from 'src/services/api.service';

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
    private credentialsService: CredentialsService
  ){
    this.loginForm = this.initializeUserForm();
  }
  ngOnInit(): void {
  }

  initializeUserForm(): FormGroup {
    return this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
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
    } else if (roles=='GENERAL_USER') {
        loginContext.userType = 'USER';
        landing = '/user/dashboard';
    }
    this.credentialsService.updateCredentials(loginContext);
    return landing;
}

  handleLogin() {
    this.isLoading = true;
    const data = this.loginForm.value;
    // const remember: boolean = this.loginFormControl.remember.value;
        this.authenticationService.login(data, true).subscribe(
            response => {
                // this.loginForm.reset();
                if (response.success === true || response.status === 'OK') {
                  const url = this.route.snapshot.queryParams['redirect'] ||
                  this.getLandingPage(response.data);
                  window.location.href = url;
                  this.getLandingPage(response.data);
                } else {
                    this.errorMessage = response.message;
                    // this.toastService.showDanger(
                    //     this.errorMessage || 'Invalid username and/or password!'
                    // );
                    this.isLoading = false;
                    localStorage.setItem('loginStatus', 'FAILED');
                    window.location.reload();
                }
            },
            error => {
                this.isLoading = false;
                this.loginForm.reset();
                this.errorMessage = 'Username or password incorrect!';
                // this.toastService.showDanger(this.errorMessage);
                const element: HTMLElement = document.getElementById(
                    'cmdSubmit'
                ) as HTMLElement;
                element.click();
                this.isLoading = false;
            }
        );
    }
}
