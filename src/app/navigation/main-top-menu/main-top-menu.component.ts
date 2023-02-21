import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { LoginContext } from 'src/app/models/login-context.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-main-top-menu',
  templateUrl: './main-top-menu.component.html',
  styleUrls: ['./main-top-menu.component.css']
})
export class MainTopMenuComponent {
  profile : LoginContext | null = null;
  menu:any;

  constructor(
    private credentials:CredentialsService,
    private authenticationService: AuthenticationService,
    private apiService: ApiService
  ){
    this.profile = this.credentials.credentials;
  }
  ngOnInit(): void {
    this.FindALLMenu();
  }
  
  handleLogout() {
      this.authenticationService.logout();
  }

  FindALLMenu() {
    const url = "/menu?role=" + this.profile?.role;
    this.apiService.suppressAlertError = true;
    this.apiService.get_(url).subscribe(response => {
      this.menu = response;
    }, error => {
      console.log(error)
    });
  }
}
