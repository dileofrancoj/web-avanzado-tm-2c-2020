import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showHeader: boolean;
  showFooter: boolean;
  subscriptions: Subscription; // objeto al cual le voy a cargar la resolución de la <Promise>
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.subscriptions = router.events.subscribe((event) => {
      // NavigationStart, NavigationEnd, NavigationErros
      // event <Promise>
      // me aseguro que la promise este resuelta y sea una instancia de navigation end
      if (event instanceof NavigationEnd) {
        const {
          showHeader = true,
          showFooter = true,
        } = activatedRoute.firstChild.snapshot.data;
        this.showHeader = showHeader;
        this.showFooter = showFooter;
      }
    });
  }
}
