import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage:string = "";

  constructor( private auth:AuthService , private user:UserService , private router:Router) { }

  ngOnInit(): void {
  }

  signup(form){

    let data:User =  form.value;
    console.log(data)
    this.auth.signup(data.email ,data.password)
    .then( res => {
      this.user.addUser(res.user.uid , data.name , data.email).then(()=>{
        this.router.navigate(['/'])
      })
      // console.log(data)

    } )
    .catch( err => {
      this.errorMessage = err.message;
    })

  }
}
