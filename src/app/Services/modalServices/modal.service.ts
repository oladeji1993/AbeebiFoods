import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ProcurementsComponent } from 'src/app/dashboard/procurements/procurements.component';
import { CartComponent } from 'src/app/shared/modal/cart/cart.component';
import { CustomerComponent } from 'src/app/shared/modal/customer/customer.component';
import { OrderComponent } from 'src/app/shared/modal/order/order.component';
import { ProcurementComponent } from 'src/app/shared/modal/procurement/procurement.component';
import {AddPackSizeComponent} from '../../shared/modal/add-pack-size/add-pack-size.component';

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  refresh = new BehaviorSubject<any>(null);

  constructor(private matDialog: MatDialog) {}

  modal( title:string, info?: any,) {
    let dialogRef: MatDialogRef<AddPackSizeComponent>;
    dialogRef = this.matDialog.open(AddPackSizeComponent);
    dialogRef.componentInstance.info = info;
    dialogRef.componentInstance.title = title;
    dialogRef.updateSize('600px');
    dialogRef.addPanelClass([
      'animate__animated',
      'animate__zoomIn',
    ]);
    return dialogRef.afterClosed();
  }



  customer( title:string, data?: any,) {
    let dialogRef: MatDialogRef<CustomerComponent>;
    dialogRef = this.matDialog.open(CustomerComponent);
    dialogRef.componentInstance.data = data;
    dialogRef.componentInstance.title = title;
    dialogRef.updateSize('600px');
    dialogRef.addPanelClass([
      'animate__animated',
      'animate__zoomIn',
    ]);
    return dialogRef.afterClosed();
  }


  order( title:string, orderParams?: any,) {
    let dialogRef: MatDialogRef<OrderComponent>;
    dialogRef = this.matDialog.open(OrderComponent);
    dialogRef.componentInstance.orderParams = orderParams;
    dialogRef.componentInstance.title = title;
    dialogRef.updateSize('800px');
    dialogRef.addPanelClass([
      'animate__animated',
      'animate__zoomIn',
    ]);
    return dialogRef.afterClosed();
  }

  procurements( title:string, procurementParams?: any,) {
    let dialogRef: MatDialogRef<ProcurementComponent>;
    dialogRef = this.matDialog.open(ProcurementComponent);
    dialogRef.componentInstance.procurementParams = procurementParams;
    dialogRef.componentInstance.title = title;
    dialogRef.updateSize('600px');
    dialogRef.addPanelClass([
      'animate__animated',
      'animate__zoomIn',
    ]);
    return dialogRef.afterClosed();
  }

  cart( title:string, cartParams?: any,) {
    let dialogRef: MatDialogRef<CartComponent>;
    dialogRef = this.matDialog.open(CartComponent);
    dialogRef.componentInstance.cartParams = cartParams;
    dialogRef.componentInstance.title = title;
    dialogRef.updateSize('600px');
    dialogRef.addPanelClass([
      'animate__animated',
      'animate__zoomIn',
    ]);
    return dialogRef.afterClosed();
  }
}
