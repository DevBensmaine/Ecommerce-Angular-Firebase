import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Shopping } from '../../interfaces/shopping.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Shopping[] = []
  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cs.getCart().subscribe((carts) => {
        this.cart = carts.map(shopping  => {
          return {
            id:shopping.payload.doc.id,
            amount:shopping.payload.doc.data()['amount'],
            name:shopping.payload.doc.data()['name'],
            price:shopping.payload.doc.data()['price']
          }
        })
        console.log(this.cart)
    })

  }

  delete(index){
      this.cs.Delete(this.cart[index].id)
  }

}
