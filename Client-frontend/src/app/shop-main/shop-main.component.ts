import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {

  foodData: any = [
    {
      name: "Schezwan Rice",
      desc: "Triple schezuan rice, combines hakka noodles, fried rice, crisp noodles and ..",
      cal: "325 CAL",
      price: "550",
      src: "https://i.postimg.cc/9Rnwcz9r/tsr.png"
    },
    {
      name: "Pav Bhaji Butter",
      desc: "Pav bhaji is a fast food dish from India, consisting of a thick vegetable curry ..",
      cal: "600 CAL",
      price: "350",
      src: "https://i.postimg.cc/21QWnzsK/pav-bhaji.png"
    },
    {
      name: "Schezwan Rice",
      desc: "Triple schezuan rice, combines hakka noodles, fried rice, crisp noodles and ..",
      cal: "325 CAL",
      price: "550",
      src: "https://i.postimg.cc/9Rnwcz9r/tsr.png"
    },
    {
      name: "Pav Bhaji Butter",
      desc: "Pav bhaji is a fast food dish from India, consisting of a thick vegetable curry ..",
      cal: "600 CAL",
      price: "350",
      src: "https://i.postimg.cc/21QWnzsK/pav-bhaji.png"
    },
    {
      name: "Schezwan Rice",
      desc: "Triple schezuan rice, combines hakka noodles, fried rice, crisp noodles and ..",
      cal: "325 CAL",
      price: "550",
      src: "https://i.postimg.cc/9Rnwcz9r/tsr.png"
    },
    {
      name: "Pav Bhaji Butter",
      desc: "Pav bhaji is a fast food dish from India, consisting of a thick vegetable curry ..",
      cal: "600 CAL",
      price: "350",
      src: "https://i.postimg.cc/21QWnzsK/pav-bhaji.png"
    },
  ]

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  saveOrder(i: any) {
    console.log(i)
    i.qty = 1;
    localStorage.setItem('orderData', JSON.stringify(i))
    this.router.navigate(['/cart'])
  }

}
