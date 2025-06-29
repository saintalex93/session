import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { catchError, interval, lastValueFrom, of, switchMap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private tokenCheckInterval: any;

  constructor(private router: Router, private httpClient: HttpClient) {
    this.startTokenCheck();
  }

  private startTokenCheck() {
    this.tokenCheckInterval = interval(5000).pipe(
      switchMap(async () => this.isValidToken())
    ).subscribe({
      next: (isValid) => {
        if (!isValid) {
          this.logout();
        }
      },
      error: () => this.logout()
    });
  }

  private isValidToken() {
    const token = this.getAuthToken();
    if (!token) {
      return Promise.resolve(false);
    }

    return lastValueFrom(
      this.httpClient.post<boolean>(
        `${environment.apiUrl}/authentication/is-valid-token`, token
      ).pipe(
        catchError(() => of(false))
      )
    );
  }

  private stopTokenCheck() {
    clearInterval(this.tokenCheckInterval);
  }

  ngOnDestroy() {
    this.stopTokenCheck();
  }

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
    this.stopTokenCheck();
  }
}


