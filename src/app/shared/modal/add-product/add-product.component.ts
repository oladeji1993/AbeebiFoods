import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  allProducts!: any[];
  public submitted = false;
  productForm!: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    private product: ProductService,
    public fb: FormBuilder,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productname: ['', Validators.compose([Validators.required])],
    }),
    this.getAllProduct()
  }

  get formControl() {
    return this.productForm.controls;
  }

  addProduct(){
    this.submitted = true;
    if(this.productForm.invalid){
      return;
    }else{
      this.product.addProduct(this.productForm.value).
      subscribe((data:any)=>{
        console.log(data)
        if(data.status == 200){
          this.alert.showSuccess(data.message, "success")
          this.closeModal()
          return
        }else{
          this.alert.showError(data.message, "Error")
        }
      }, err =>{
        this.alert.showError(err, "Error")
      })  
    }

  }

  getAllProduct(){
    this.product.getProducts().subscribe((response:any) => {
      this.allProducts = response.data
    })
  }

  closeModal() {
    this.dialogRef.close();
  }

}
