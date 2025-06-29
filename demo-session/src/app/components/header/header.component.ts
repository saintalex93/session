import { LoginService } from './../../login/login.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showNavbar = false;
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showNavbar = !(event.url.includes('/login') || event.url === '/');
    });
  }

  logout() {
    this.authenticationService.logout();
  }
}
