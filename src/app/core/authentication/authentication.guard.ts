import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { CredentialsService } from './credentials.service';


@Injectable({
    providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router, private credentialsService: CredentialsService, private apiservice:ApiService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.credentialsService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/login'], {
            queryParams: { redirect: state.url },
            replaceUrl: true,
        });
        return false;
    }
}
