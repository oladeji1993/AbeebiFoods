import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { CustomerService } from 'src/app/Services/customer/customer.service';
import { ModalService } from 'src/app/Services/modalServices/modal.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  p: number = 1;
  data: any;
  allCustomers: any

  constructor(
    private modalService: ModalService,
    private customerService: CustomerService,
    private alert: AlertService,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.getAllCustomers()
  }

  addCustomers(){
    const title = "Add Customer"
    this.modalService.customer(title).subscribe((resp:any)=>{
      if(resp && resp.data) {
        this.getAllCustomers()
      }
    })
  }

  getAllCustomers(){
    this.customerService.getCustomers().subscribe((response:any) => {
      this.allCustomers = response.data
    })
  }


  editCustomer(customer:any){
    const title ="Edit Customer"
    this.modalService.customer(title, customer).subscribe((resp)=>{
      if(resp && resp.data) {
        this.getAllCustomers()
      }
    })
  }

  deleteCustomer(id:any){
    this.customerService.deleteCustomer(id).subscribe((resp:any)=>{
      if(resp.status === 200){
        this.alert.showSuccess(resp.message, "success")
        this.getAllCustomers()
      }else{
        this.alert.showError(resp.message, "Error")
      }
    }, err => {
      this.alert.showError(err, "Error")
    })
  }
}
