import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ErrorService } from '@core/services/error.service';
import { DestroyHook } from '@shared/components';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends DestroyHook {
  title = 'BWS-WEB';
  constructor(private route: Router, private errorService: ErrorService) {
    super();
    this.route.events.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.errorService.cleanError();
      }
    });
  }
}
