import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginContext } from '../../models/login-context.model';
import { AuthenticationService } from '../authentication/authentication.service';
import { CredentialsService } from '../authentication/credentials.service';

@Injectable({
    providedIn: 'root',
})
export class ErrorInterceptorService implements HttpInterceptor {
    profile: LoginContext | null;
    constructor(
        private authService: AuthenticationService,
        private credentialService: CredentialsService,
        private router: Router
    ) {
        this.profile = this.credentialService.credentials;
    }

    // use this interceptor for routing all 401 response
    // TODO: stil check might not be applicable for all scenarios but it works shaa lol
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log("The error routing intercepto is working....")
        return next.handle(request).pipe(
            catchError(err => {
                if (err.status === 401) {
                    this.authService.logOutUserButKeepDetails();
                    // this is so if user has details stored in the session storage he can easily continue once redirected back
                    this.router.navigate(['/auth/signin']);
                    location.reload(true);
                }
                //   console.log("error details: ", err)
                return throwError(err?.error);
            })
        );
    }
}
