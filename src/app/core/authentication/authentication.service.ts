import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from 'src/services/api.service';
import { CredentialsService } from './credentials.service';



/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    constructor(private router: Router,
        private apiService: ApiService, 
        private credentialsService: CredentialsService
        ) {
        this.apiService.suppressAlertError = true;
    }

    /**
     * Authenticates the user.
     * @param context The login parameters.
     * @return The user credentials.
     */
    login(context: any, remember: boolean): Observable<any> {
        return this.apiService.post_("/login", JSON.stringify(context)).pipe(
            map((response: any) => {
                if (response.success == true) {
                    this.credentialsService.setCredentials(response.data, remember);
                    localStorage.setItem('loginStatus', 'SUCCESS');
                }
                return response;
            }),
            catchError(error => {
                return of(error);
            })
        );

    }

    register(context: any): Observable<any> {
        return this.apiService.post_("/auth/create/user", JSON.stringify(context)).pipe(map(
            response=>{
                console.log(response);
            }
        ))
    }

    // registerAdmin(context: RegisterContext): Observable<any> {
    //     return this.apiService.post_("/auth/create/admin", JSON.stringify(context));
    // }


    /**
     * Logs out the user and clear credentials.
     * @return True if the user was logged out successfully.
     */
    logout(): Observable<boolean> {
        this.credentialsService.setCredentials();
        this.credentialsService.clearStorage();
        this.router.navigate(['login'], { replaceUrl: true });
        return of(true);

    }


    /**
     * logOut User Without Removing The other user persisted details in session or local memory
     */
    logOutUserButKeepDetails(){
        this.credentialsService.clearUserLoginDetails();
    }

}
