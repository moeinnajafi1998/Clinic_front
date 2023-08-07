import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecognizationService } from 'src/app/services/recognization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn : boolean = false;
  constructor(private recUser:RecognizationService,private router:Router ){
    this.isLoggedIn = this.recUser.checkLogIn();
    this.recUser.checkUser(); 
  }

  ngOnInit(){}

  logOut(){
    this.recUser.logOut();
    this.router.navigate(['/']);
  }

  ngDoCheck(){
    console.log("ng do check in navbar")
    console.log(this.recUser.checkLogIn())
    this.isLoggedIn = this.recUser.checkLogIn();
  }


}
