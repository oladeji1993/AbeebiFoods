import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Services/modalServices/modal.service';
import { ProcurementService } from 'src/app/Services/procurement/procurement.service';

@Component({
  selector: 'app-procurements',
  templateUrl: './procurements.component.html',
  styleUrls: ['./procurements.component.scss']
})
export class ProcurementsComponent implements OnInit {

  p: number = 1;
  allProcurements: any
  // procurementParams:any
  // title:any


  constructor(
    private modalService: ModalService,
    private procurementService: ProcurementService,
  ) { }

  ngOnInit(): void {
    this.getAllProcurements()
  }

  addProcurement(){
    const title = "Add Procurement"
    this.modalService.procurements(title).subscribe(data =>{
      if(data && data.data) {
        this.getAllProcurements()
      }
    })
  }

  getAllProcurements(){
    this.procurementService.getProcurements().subscribe((response:any) =>{
      this.allProcurements = response.data;
      // const date = response.data.procurementdate
      // date.toLocaleDateString({ year: 'numeric', month: '2-digit', day: '2-digit' })
      // console.log(date)
    })
  }
}
