import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _productUrl = "https://abeebibackendproject.themdotweb.com/api";

  constructor(
    private http : HttpClient,
  ) { }

  getProducts(){
    return this.http.get(`${this._productUrl}/products`);
  }

  getReport(product:any){
    return this.http.post(`${this._productUrl}/report`, product);
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

  updateStatus(data:any){
    return this.http.patch(`${this._productUrl}/products`, data);
  }
}