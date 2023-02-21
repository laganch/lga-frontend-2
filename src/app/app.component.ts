import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChildActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { RoutingStateService } from 'src/services/RoutingState.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'government_frontend';
  constructor(
      public router: Router,
      private titleService: Title,
      public routingState: RoutingStateService
  ) {
      this.router.events
          .pipe(filter(event => event instanceof ChildActivationEnd))
          .subscribe(event => {
              let snapshot = (event as ChildActivationEnd).snapshot;
              while (snapshot.firstChild !== null) {
                  snapshot = snapshot.firstChild;
              }
              this.titleService.setTitle(snapshot.data['title'] || 'Local government Portal');
          });
      this.routingState.loadRouting();
  }

  onActivate(event: any) {
      window.scroll(0, 0);
  }
}
