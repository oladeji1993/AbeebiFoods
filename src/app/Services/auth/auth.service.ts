import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _loginUrl = "http://localhost:3000/api/users/login";
  private _roleUrl = "http://localhost:3000/api/users";
  private _registerUrl = "http://localhost:3000/api/users";
  token: any
  user: any

  constructor(
    private http : HttpClient,
    private router: Router,
  ) { }



  loginUser(user:any){
    return this.http.post(this._loginUrl, user);
  };

  getRole(){
    return this.http.get(this._roleUrl);
  }

  registerUser(user:any){
    return this.http.post(this._registerUrl, user);
  }


  IsLoggedIn(){
    let bool: boolean;
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if(token && role) {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }

  userIsLoggedIn(){
    let bool: boolean;
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
  
    if(token && role == "1") {
      bool = true;
    }else if(token && role == "2"){
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }


}
