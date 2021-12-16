import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  Url = "https://abeebibackendproject.themdotweb.com/api";

  constructor(
    private http : HttpClient,
  ) { }

  getCustomers(){
    return this.http.get(`${this.Url}/customer`);
  }

  addCustomer(user:any){
    return this.http.post(`${this.Url}/customer`, user);
  }

  fetchCustomerTransations(user:any){
    return this.http.post(`${this.Url}/transaction`, user);
  }

  deleteCustomer(id:any){
    return this.http.delete(`${this.Url}/customer`+id);
  }

  updateCustomer(data:any){
    return this.http.patch(`${this.Url}/customer`, data);
  }

}
