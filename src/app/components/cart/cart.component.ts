import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Shopping } from '../../interfaces/shopping.interface';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Shopping[] = []
  somme:number = 0;
  user:User = {}

  constructor(private cs:CartService,private as: AuthService) { }

  ngOnInit(): void {
    this.cs.getCart().subscribe((carts) => {
        this.cart = carts.map(shopping  => {
          this.somme +=shopping.payload.doc.data()['amount'] * shopping.payload.doc.data()['price']
          return {
            id:shopping.payload.doc.id,
            amount:shopping.payload.doc.data()['amount'],
            name:shopping.payload.doc.data()['name'],
            price:shopping.payload.doc.data()['price']
          }
        })
        console.log(this.cart)
    })
    this.cs.getUserInfo().subscribe((rest) =>  this.user = rest)
  }

  updateAmountInTableCart(){
    this.somme = 0
    this.cart.map(item  => {
       this.somme += item.amount * item.price
    }
    )
  }

  delete(index){
      this.cs.Delete(this.cart[index].id)
  }

  updateMount(index) {
      this.cs.updateMount(this.cart[index].id,this.cart[index].amount)
  }

}
