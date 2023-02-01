import { Component } from '@angular/core';
import { APP } from '@shared/constants';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  app = APP;
}
