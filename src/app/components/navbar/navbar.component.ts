import { Component } from '@angular/core';
import { RecognizationService } from 'src/app/services/recognization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn : boolean = false;
  constructor(private recUser:RecognizationService){}

  ngOnInit(){
    this.isLoggedIn = this.recUser.checkLogIn();
    this.recUser.checkUser();
  }


  logOut(){
    this.recUser.logOut();
  }

  ngDoCheck(){
    console.log("do check")
    console.log(this.recUser.checkLogIn())
    this.isLoggedIn = this.recUser.checkLogIn();
  }


}
