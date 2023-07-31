import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CredentialsService } from "src/app/core/authentication/credentials.service";
import { LoginContext } from "src/app/models/login-context.model";
import { Constant } from "./Constant";

@Injectable({
    providedIn: 'root',
})

export class TokenInterceptor implements HttpInterceptor{
  token = localStorage.getItem(Constant.LOGGED_IN_USER);
 
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwttoken = req.clone({
        setHeaders:{
          Authorization: `Bearer ${this.token}`,
        }
    });
    return next.handle(jwttoken);
  }
}