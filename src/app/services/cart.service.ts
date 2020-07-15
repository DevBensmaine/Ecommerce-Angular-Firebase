import { Injectable } from '@angular/core';
import { Good } from '../interfaces/good.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private fs: AngularFirestore, private as: AuthService) {}

  AddToCart(data: Good) {
   return this.fs.collection(`users/${this.as.userId}/card`).add(data);
  }

  getCart(){
    return this.fs.collection(`users/${this.as.userId}/card`).snapshotChanges()
  }

  Delete(id) {
    return this.fs.doc(`users/${this.as.userId}/card/${id}`).delete();
  }

  updateMount(id,amount) {
    return this.fs.doc(`users/${this.as.userId}/card/${id}`).update({
      amount : amount
    });
  }

}
