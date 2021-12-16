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
    return this.http.get(`${this.Url}/payment`);
  }

  addPayment(user:any){
    return this.http.post(`${this.Url}/payment`, user);
  }

  deletePayment(id:any){
    return this.http.delete(`${this.Url}/payment`+id);
  }

  // updateCustomer(data:any){
  //   return this.http.patch(`${this.Url}/customer`, data);
  // }
}
