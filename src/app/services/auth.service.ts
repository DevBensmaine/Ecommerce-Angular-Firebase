import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fs: AngularFireAuth) {}

  signup(email, password) {
    return this.fs.createUserWithEmailAndPassword(email, password);
  }


}
