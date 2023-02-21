import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { LoginContext } from 'src/app/models/login-context.model';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profile:LoginContext | null;

  constructor(private credentialService: CredentialsService,
    private authenticationService: AuthenticationService,
    private apiService: ApiService) {
    this.profile = this.credentialService.credentials;
  }

  ngOnInit(): void {
  }


}
