import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private router: Router) { }

  getAuthToken(): string {
    return <string>localStorage.getItem('userToken');
  }

  setAuthToken(token: string) {
    localStorage.setItem('userToken', token);
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
