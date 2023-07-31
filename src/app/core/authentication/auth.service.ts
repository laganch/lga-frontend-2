import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Constant } from 'src/services/Constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SERVER_URL = environment.serverUrl;

  constructor(private http:HttpClient) { }

  public Login(url:any, data:any){
    const actionurl = this.SERVER_URL + url;
    return this.http.post(actionurl, data)
  }
  public Register(url:any, Data:any){

  }

  get isLoggedIn(): boolean {
    return !!(localStorage.getItem(Constant.USER_DATA));
  }

  getToken(): string | null  {
    return localStorage.getItem(Constant.LOGGED_IN_USER);
  }

  getUser(): any | null {
    if (!this.isLoggedIn) return null;
    return (JSON.parse(JSON.stringify(localStorage.getItem(Constant.USER_DATA))));
  }

  getPriviliage(){
    return JSON.parse(this.getUser()).priviliage.split(",").map(function (value:any) {
      return value.trim();
   })
  }

  public hasRole(role: any){
    return this.getPriviliage().includes(role);
  }

  public hasAnyPermission(permissions: string[]) {
    for (let permission of permissions) {
      if (this.hasRole(permission)) {
        return true;
      }
    }
    return false;
  }

}
