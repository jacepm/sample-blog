import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req, next) {
    const token = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(token).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        if (error.status === 401 || error.status === 403) {
          this.auth.logout();
        }

        return throwError(error);
      })
    );
  }
}
