import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoutingStateService {

  private history: string[] = [];

  constructor(private router: Router) {
  }

  public loadRouting(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.history.push(event.urlAfterRedirects);
      });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public getPreviousUrl(): string {
    return this.history[this.history.length - 2] || environment.baseURL;
  }

  public goPreviousUrl() {
    this.router.navigate([this.getPreviousUrl()], { replaceUrl: true });
  }

  public getCurrentUrl(): string {
    return this.history[this.history.length - 1] || environment.baseURL;
  }




}
