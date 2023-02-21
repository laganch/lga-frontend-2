import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginContext } from '../../models/login-context.model';
import { CredentialsService } from '../authentication/credentials.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  profile: LoginContext | null;
//   tinEndPointServerUrl: string = 'https://bornoirs.com/tin2/validation/';
//   tinIndividualEndPointServerUrl: string = 'https://bornoirs.com/tin2/individual/'
//   tinNonIndividualEndPointServerUrl: string = 'https://bornoirs.com/tin2/non-individual/'

  constructor(private credentialService: CredentialsService) {
    this.profile = this.credentialService.credentials;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.profile == null ? null : this.profile.token;

        // console.log("BEARER TOKEN INTERCEPTED---,  ")

        if (token) {
            // console.log("BEARER TOKEN INTERCEPTED,  "+token)
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,

              }
            });
        // }
    }

    return next.handle(request);
  }

}
