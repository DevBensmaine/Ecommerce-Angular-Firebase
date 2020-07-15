import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from '../../interfaces/good.interface';
import { GoodsService } from '../../services/goods.service';
import { element } from 'protractor';
import { Subscribable, Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit,OnDestroy {
  goods: Good[] = [];
  goodsObservable:Subscription

  constructor(private gs: GoodsService) {}


  ngOnInit(): void {
    this.goodsObservable = this.gs.getAllGoods().subscribe((data) => {
      //this.goods= data
      this.goods = data.map( element => {
        return {
          id: element.payload.doc.id,
          // ...element.payload.doc.data(),
          name:element.payload.doc.data()['name'],
          price:element.payload.doc.data()['price'],
          photoUrl:element.payload.doc.data()['photoUrl']
        };
      });
    });
  }
  ngOnDestroy(){
    this.goodsObservable.unsubscribe();
  }

  addToCard(index) {
    console.log('add - ', this.goods[index]);
  }
}
