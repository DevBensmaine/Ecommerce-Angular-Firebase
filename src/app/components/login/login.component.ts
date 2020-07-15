import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService) { }

  ngOnInit(): void {
  }

  signIn(f){
    let data =  f.value
   this.as.login(data.email,data.password).then(
     result => console.log(result)
   )
   .catch(err => console.log(err))
  }

}
