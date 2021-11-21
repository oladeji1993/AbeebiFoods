import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _productUrl = "http://localhost:3000/api";

  constructor(
    private http : HttpClient,
  ) { }

  getProducts(){
    return this.http.get(`${this._productUrl}/products`);
  }

  addProduct(user:any){
    return this.http.post(`${this._productUrl}/products`, user);
  }
  addPackSize(user:any){
    return this.http.post(`${this._productUrl}/createPacksize`, user);
  }

  getPackSize(){
    return this.http.get(`${this._productUrl}/createPacksize`);
  }

  updatePackSize(data:any){
    return this.http.patch(`${this._productUrl}/createPacksize`, data);
  }

  deletePackSize(id:any){
    return this.http.delete(`${this._productUrl}/createPacksize/`+id);
  }
}