import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/globalService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  orderData: any;
  productData: any;
  totalRevenue: number = 0;
  totalProfit: number = 0;
  constructor(public global: GlobalService, public router: Router) { }

  ngOnInit(): void {
    console.log(this.global.isLogin)
    if (this.global.isLogin == false || this.global.isLogin == undefined) {
      this.router.navigate(["/login"])
      console.log(this.global.isLogin)
    }
    else {
      this.global.getOrderData().subscribe(
        (data) => {
          console.log(data)
          this.orderData = data
          for (var i = 0; i < this.orderData.length; i++) {
            this.totalRevenue = this.totalRevenue + Number(this.orderData[i].price)
            this.totalProfit = this.totalProfit + 0.3 * Number(this.orderData[i].price)
          }
        }
      )

      this.global.getProductData().subscribe(
        (data) => {
          console.log(data)
          this.productData = data
        }
      )
    }
  }

}
