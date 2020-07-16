import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user:Observable<firebase.User>
  userId :string="";

  constructor(private fs: AngularFireAuth) {
    this.user = fs.user;
  }

  signup(email, password) {
    var actionCodeSettings = {
      url: "http://localhost:4200",
      // This must be true.
      handleCodeInApp: true
    };
    this.fs.sendSignInLinkToEmail(email,actionCodeSettings).then(() => {
      console.log("sended")
    })
    return this.fs.createUserWithEmailAndPassword(email, password);
  }

  login(email, password){
    return this.fs.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.fs.signOut();
  }
  findUser(){
    return this.fs.currentUser
  }


}
