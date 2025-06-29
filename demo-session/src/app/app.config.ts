import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { authenticationInterceptor } from "./authentication.interceptor";
import { loadingInterceptor } from "./components/loader/loading.interceptor";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authenticationInterceptor, loadingInterceptor])),
    provideAnimations(), provideAnimationsAsync()
  ]
};
