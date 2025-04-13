import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authenticationInterceptor} from "./authentication.interceptor";
import {loadingInterceptor} from "./components/loader/loading.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authenticationInterceptor, loadingInterceptor])
    )]
};
