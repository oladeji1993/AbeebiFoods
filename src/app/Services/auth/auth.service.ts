import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "https://api.hiltonparkerng.com/auth/login";


  constructor(
    private http : HttpClient,
    private router: Router,
  ) { }

  loginUser(user:any){
    return this.http.post(this._loginUrl, user)
  };
}
