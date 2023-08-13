import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { CredentialsService } from 'src/app/core/authentication/credentials.service';
import { LoginContext } from 'src/app/models/login-context.model';
import { ApiService } from 'src/services/api.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  profile:LoginContext | null;

  constructor(private credentialService: CredentialsService,
    private authenticationService: AuthenticationService,
    private apiService: ApiService) {
    this.profile = this.credentialService.credentials;
  }

  ngOnInit(): void {
  }

  upAlert(){
    alertify.set('notifier','position', 'top-left');
    alertify.warning('Coming Soon !!!');

  }

}
