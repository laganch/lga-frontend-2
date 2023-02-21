import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CredentialsService } from "src/app/core/authentication/credentials.service";
import { LoginContext } from "src/app/models/login-context.model";

@Injectable({
    providedIn: 'root',
})

export class TokenInterceptor implements HttpInterceptor{
    profile: LoginContext | null;

      constructor(private credentialService: CredentialsService) {
        this.profile = this.credentialService.credentials;
      }
    
      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
        const token = this.profile == null ? null : this.profile.token;
            if (token) {
                request = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${token}`,
                  }
                });
            }
    
        return next.handle(request);
      }
}