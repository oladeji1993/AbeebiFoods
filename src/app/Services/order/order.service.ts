import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  cartItems = new Subject<any>();


 
  Url = "https://abeebibackendproject.themdotweb.com/api";

  constructor(
    private http : HttpClient,
  ) { }

  getOrders(){
    return this.http.get(`${this.Url}/order`);
  }

  addOrder(user:any){
    return this.http.post(`${this.Url}/order`, user);
  }

  showDetails(user:any){
    return this.http.post(`${this.Url}/paymentID`, user);
  }

  updateOrder(user:any){
    return this.http.patch(`${this.Url}/order`, user);
  }

}
