import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { ProcurementService } from 'src/app/Services/procurement/procurement.service';

@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.scss']
})
export class ProcurementComponent implements OnInit {

  procurementParams:any
  title:any;
  public submitted = false;
  customerForm!: FormGroup;
  allProcurements: any



  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProcurementComponent>,
    private procurementService: ProcurementService,
    private alert: AlertService,


  ) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      procurementtype: ['', Validators.compose([Validators.required])],
      materialquality: ['', Validators.compose([Validators.required])],
      qtysupplied: ['', Validators.compose([Validators.required])],
      suppliername: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      amount: ['', Validators.compose([Validators.required])],
      nameofprocurement: ['', Validators.compose([Validators.required])],
      procurementdate: ['', Validators.compose([Validators.required])],
    })

  }

  get formControl() {
    return this.customerForm.controls;
  }

  addProcurement(){
    this.submitted = true;
    if(this.customerForm.invalid){
      return
    }else{
      this.procurementService.addProcurements(this.customerForm.value).subscribe((result:any)=>{
        if(result.status === 200){
          this.alert.showSuccess(result.message, "success")
          this.closeModal(true);
          return
        }else{
          this.alert.showError(result.message, "Error")
        }
      }, err =>{
        this.alert.showError(err, "Error")
      })
    }

  }

 

  
  customerType = [
    {id:"1", name: "Supermart", value: "sp"},
    {id:"2", name: "Store", value: "store"},
    {id:"3", name: "Distributors", value: "distributors"}
  ]

  states = [
    {id:"1", name: "Osun", value: "os"},
    {id:"2", name: "Ogun", value: "og"},
    {id:"3", name: "Lagos", value: "lasgidi"},
  ]


  closeModal(val?:boolean) {
    this.dialogRef.close({ data: val });
  }

}
