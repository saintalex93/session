import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  getAuthToken(): string {
    return <string>localStorage.getItem('userToken');
  }

  setAuthToken(token: string) {
    localStorage.setItem('userToken', token);
  }
}
