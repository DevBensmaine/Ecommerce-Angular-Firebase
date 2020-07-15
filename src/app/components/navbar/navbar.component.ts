import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = false;
  isUser: boolean = false;


  constructor(private as :AuthService) { }

  ngOnInit(): void {
    this.as.user.subscribe(user =>{
        if(user) {
          this.isUser = true
          this.as.userId = user.uid
        }
        else this.isUser = false
    })
  }

  toggoleNavBar(){
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.as.logout();
  }


}
