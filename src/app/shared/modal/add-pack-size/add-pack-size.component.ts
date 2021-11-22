import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-add-pack-size',
  templateUrl: './add-pack-size.component.html',
  styleUrls: ['./add-pack-size.component.scss']
})


export class AddPackSizeComponent implements OnInit {
  allProducts!: any[];
  public submitted = false;
  productForm!: FormGroup;
  info: any;
  title!: string;


  constructor(
    public dialogRef: MatDialogRef<AddPackSizeComponent>,
    private product: ProductService,
    public fb: FormBuilder,
    private alert: AlertService


  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productname: ['', Validators.compose([Validators.required])],
      costofproduction: ['', Validators.compose([Validators.required])],
      sellingprice: ['', Validators.compose([Validators.required])],
      packsize: ['', Validators.compose([Validators.required])],
      quantity: ['', Validators.compose([Validators.required])],
      qtyout: ['', Validators.compose([Validators.required])],

    })

    if(this.info) {
      this.productForm.patchValue(this.info);
    }
    this.getAllProduct()
  }


  addProductSize(){
    this.submitted = true;
    if(this.productForm.invalid){
      return;
    }else{
      if(this.info){
        this.title = 'update'
        const {productname, costofproduction, sellingprice, packsize, quantity, qtyout, id} = this.productForm.value;
        const data = {
          productname,
          costofproduction,
          sellingprice,
          packsize,
          quantity,
          qtyout,
          id: this.info.id
        }
        this.product.updatePackSize(data).subscribe((response:any) => {
          if(response.status === 200){
            this.alert.showSuccess(response.message, "success")
            this.closeModal(true);
            return
          }else{
            this.alert.showError(response.message, "Error")
          }
        }, err =>{
          this.alert.showError(err, "Error")
        })
      }else{
        this.product.addPackSize(this.productForm.value)
        .subscribe((response:any)=>{
          if(response.status == 200){
            this.alert.showSuccess(response.message, "success")
            this.closeModal(true)
            return
          }else{
            this.alert.showError(response.message, "Error")
          }
        }, err =>{
          this.alert.showError(err, "Error")
        })
      }
    }
  }

  get formControl() {
    return this.productForm.controls;
  }

  getAllProduct(){
    this.product.getProducts().subscribe((response:any) => {
      this.allProducts = response.data
    })
  }

  closeModal(val?:boolean) {
    this.dialogRef.close({ data: val });
  }

}
