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
    return this.http.get(`${this._productUrl}/products/fetch`);
  }

  getReport(product:any){
    return this.http.post(`${this._productUrl}/report/add`, product);
  }


  addProduct(user:any){
    return this.http.post(`${this._productUrl}/products/add`, user);
  }
  addPackSize(user:any){
    return this.http.post(`${this._productUrl}/createPacksize/packsize`, user);
  }

  getPackSize(){
    return this.http.get(`${this._productUrl}/createPacksize/get`);
  }

  updatePackSize(data:any){
    return this.http.patch(`${this._productUrl}/createPacksize/patch`, data);
  }

  deletePackSize(id:any){
    return this.http.delete(`${this._productUrl}/createPacksize/delete`+id);
  }

  updateStatus(data:any){
    return this.http.patch(`${this._productUrl}/products/update`, data);
  }
}