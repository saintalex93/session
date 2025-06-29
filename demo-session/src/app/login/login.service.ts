import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {RestLogin} from "./RestLogin";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient: HttpClient) {
    }

    login(restLogin: RestLogin): Observable<string> {
        return this.httpClient.post<string>(`${environment.apiUrl}/login`, restLogin)
    }

}
