import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/Services/product/product.service';
import { AddPackSizeComponent } from 'src/app/shared/modal/add-pack-size/add-pack-size.component';
import { AddProductComponent } from 'src/app/shared/modal/add-product/add-product.component';

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
    private product: ProductService

  ) { }

  ngOnInit(): void {
    this.productDetails()
  }

  // Transactions = [
  //   {product: "BEANS FLOUR", pack_size: "Abebi Beans Flour 50kg", cost_of_production: "610", selling_price: "700", total_qty: "10512", Qty_out:"10077",Qty_left:"50", new_qty:"10"},
  //   {product: "GARRI", pack_size: "Gari Flour 50kg", cost_of_production: "2210", selling_price: "3400", total_qty: "10512", Qty_out:"10077",Qty_left:"50", new_qty:"10"},
  //   {product: "PLANTAIN FLOUR", pack_size: "Abebi Plantain flour 50kg", cost_of_production: "2210", selling_price: "3400", total_qty: "10512", Qty_out:"10077",Qty_left:"50", new_qty:"10"},
  // ]

  addProduct(){
    let dialogRef: MatDialogRef<AddProductComponent>;
    dialogRef = this.matDialog.open(AddProductComponent);
    // dialogRef.componentInstance.info = info;
    dialogRef.updateSize('600px');
    dialogRef.addPanelClass([
      'animate__animated',
      'animate__zoomIn',
    ]);
    return dialogRef.afterClosed();
  }


  addProductSize(){
    let dialogRef: MatDialogRef<AddPackSizeComponent>;
    dialogRef = this.matDialog.open(AddPackSizeComponent);
    // dialogRef.componentInstance.info = info;
    dialogRef.updateSize('600px');
    dialogRef.addPanelClass([
      'animate__animated',
      'animate__zoomIn',
    ]);
    return dialogRef.afterClosed();
  }

  productDetails(){
    this.product.getPackSize().subscribe((resp:any) =>{
      this.allProductDetails = resp.data
      // console.log(this.allProductDetails)
    })
  }
  

}
