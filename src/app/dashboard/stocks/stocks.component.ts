import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/Services/product/product.service';
import { AddProductComponent } from 'src/app/shared/modal/add-product/add-product.component';
import { ModalService } from '../.../../../Services/modalServices/modal.service'
import { AlertService } from 'src/app/Services/alert/alert.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  p: number = 1;
  allProductDetails!: any[]
  constructor(
    public dialog: MatDialog,
    private matDialog: MatDialog,
    private product: ProductService,
    private modalService : ModalService,
    private alert: AlertService

  ) { }

  ngOnInit(): void {
    this.productDetails()
  }

  addProduct(){
    let dialogRef: MatDialogRef<AddProductComponent>;
    dialogRef = this.matDialog.open(AddProductComponent);
    dialogRef.updateSize('600px');
    dialogRef.addPanelClass([
      'animate__animated',
      'animate__zoomIn',
    ]);
    return dialogRef.afterClosed();
  }


  addProductSize(){
    const title = "Add Pack Size"
    this.modalService.modal(title).subscribe(res =>{
      if(res && res.data) {
        this.productDetails()
      }
    })
  }


  editProduct(product:any){
    const title = "Edit Product"
    this.modalService.modal(title, product).subscribe(res =>{
      if(res && res.data) {
        this.productDetails()
      }
    })
  }

  deletePackSize(id:any){
    this.product.deletePackSize(id).subscribe((resp:any) =>{
      if(resp.status === 200){
        this.alert.showSuccess(resp.message, "success")
        this.productDetails()
      }else{
        this.alert.showError(resp.message, "Error")
      }
    }, err => {
      this.alert.showError(err, "Error")
    })
  }


  productDetails(){
    this.product.getPackSize().subscribe((resp:any) =>{
      this.allProductDetails = resp.data.results
    })
  }
  

}
