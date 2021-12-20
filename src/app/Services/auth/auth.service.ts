import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _loginUrl = "https://abeebibackendproject.themdotweb.com/api/users/login";
  private _roleUrl = "https://abeebibackendproject.themdotweb.com/api/users/fetchrole";
  private _registerUrl = "https://abeebibackendproject.themdotweb.com/api/users/add";
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
