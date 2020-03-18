import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { environment as env } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private API_URL = env.API_URL;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }

  public get<T>(path: string): Promise<T> {
    return new Promise((resolve, reject) =>
      this.http
        .get(this.API_URL + path, this.authorization())
        .pipe(catchError(this.handleError))
        .subscribe(
          (data: any) => resolve(data),
          err => reject(err)
        )
    );
  }

  public post<T, U>(path: string, body: T): Promise<U> {
    return new Promise((resolve, reject) =>
      this.http
        .post(this.API_URL + path, body, this.authorization())
        .pipe(catchError(this.handleError))
        .subscribe(
          (data: any) => resolve(data),
          err => reject(err)
        )
    );
  }

  public patch<T, U>(path: string, body: T): Promise<U> {
    return new Promise((resolve, reject) =>
      this.http
        .patch(this.API_URL + path, body, this.authorization())
        .pipe(catchError(this.handleError))
        .subscribe(
          (data: any) => resolve(data),
          err => reject(err)
        )
    );
  }

  authorization() {
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
  }
}
