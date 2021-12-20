import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  Url = "https://abeebibackendproject.themdotweb.com/api";

  constructor(
    private http : HttpClient,
  ) { }

  getPayments(){
    return this.http.get(`${this.Url}/payment/fetch`);
  }

  addPayment(user:any){
    return this.http.post(`${this.Url}/payment/add`, user);
  }

  deletePayment(id:any){
    return this.http.delete(`${this.Url}/payment/delete/`+id);
  }
}
