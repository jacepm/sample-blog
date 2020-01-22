import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn: boolean;
  constructor(private router: Router) {}

  loggedIn() {
    const token = localStorage.getItem("token");
    this.isLoggedIn = token ? true : false;
    return this.isLoggedIn;
  }

  logout(url: string = "") {
    this.isLoggedIn = false;
    localStorage.removeItem("token");
    this.router.navigate([url]);
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
