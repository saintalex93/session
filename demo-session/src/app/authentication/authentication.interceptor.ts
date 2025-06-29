import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

const EXCLUDED_ROUTES = [
  '/login'
];

export function authenticationInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {

  if (EXCLUDED_ROUTES.some(route => req.url.includes(route))) {
    return next(req);
  }

  const authToken = inject(AuthenticationService).getAuthToken();
  const newReq = req.clone({
    headers: req.headers.append('userToken', authToken)
  });
  return next(newReq);
}
