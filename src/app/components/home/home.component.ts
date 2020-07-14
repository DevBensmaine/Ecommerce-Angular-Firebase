import { Component, OnInit } from '@angular/core';
import { Good } from '../../interfaces/good.interface'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Good[] = [
    {name : 'appel', price: 5, photoUrl:'assets/appel.png'},
    {name : 'Banane', price: 2, photoUrl:'assets/banane.png'},
    {name : 'mango', price: 5, photoUrl:'assets/mango.jpg'},
    {name : 'stroberry', price: 3, photoUrl:'assets/stroberry.jpg'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addToCard(index){
      console.log("add - ",this.goods[index])
  }

}
