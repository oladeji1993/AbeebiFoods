import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order/order.service';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent implements OnInit {

  p: number = 1;
  allOrders! : any;
  allProducts!: any[];
  productReport: any;
  totalQuantity: any;
  singleQty: any;
  loader = true



  constructor(
    private orderService: OrderService,
    private product: ProductService,

  ) { }

  ngOnInit(): void {
    this.getOrders()
    this.getAllProduct()
  }

  getOrders(){
    this.orderService.getOrders().subscribe((data:any)=>{
      this. totalQuantity = data.data.totalQty
      this.allOrders = data.data.results;
      this.loader = false
    })
  }
  
 

  onOptionsSelected(productname:string){
    if(productname === "all"){
      this.getOrders()
      this.singleQty = 0
      return;
    }
    const data = {
      productname: productname
    }
    this.product.getReport(data).subscribe((response:any) =>{
      this.allOrders = response.data.results
      this.singleQty = response.data.totalQty
      this.loader = false
    })
  }

  getAllProduct(){
    this.product.getProducts().subscribe((response:any) => {
      this.allProducts = response.data;
      this.loader = false
    })
  }

}
