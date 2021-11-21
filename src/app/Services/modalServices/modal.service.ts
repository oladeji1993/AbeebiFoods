import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { CustomerComponent } from 'src/app/shared/modal/customer/customer.component';
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
}
