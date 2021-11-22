import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  Url = "http://localhost:3000/api";

  constructor(
    private http : HttpClient,
  ) { }

  getCustomers(){
    return this.http.get(`${this.Url}/customer`);
  }

  addCustomer(user:any){
    return this.http.post(`${this.Url}/customer`, user);
  }

  deleteCustomer(id:any){
    return this.http.delete(`${this.Url}/customer/`+id);
  }

  updateCustomer(data:any){
    return this.http.patch(`${this.Url}/customer`, data);
  }

}
