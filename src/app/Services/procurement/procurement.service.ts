import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcurementService {

  Url = "https://abeebibackendproject.themdotweb.com/api";

  constructor(
    private http : HttpClient,
  ) { }

  getProcurements(){
    return this.http.get(`${this.Url}/procurement`);
  }

  addProcurements(user:any){
    return this.http.post(`${this.Url}/procurement`, user);
  }
}
