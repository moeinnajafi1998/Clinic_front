import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';
import { RecognizationService } from 'src/app/services/recognization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn : boolean = false;
  is_superUser : boolean = false;
  user_type : string = '';

  user = {} as User; 

  constructor(private recUser:RecognizationService,private router:Router,private http:HttpService ){
    this.isLoggedIn = this.recUser.checkLogIn();
    this.recUser.checkUser(); 
  }

  ngOnInit(){
    this.http.userRecognization().subscribe(res=>{
      this.user = res;
      this.is_superUser = res.is_superuser;
      this.user_type = res.user_type
    })

  }

  logOut(){
    this.recUser.logOut();
    this.router.navigate(['/']);
  }

  ngDoCheck(){
    this.isLoggedIn = this.recUser.checkLogIn();
    if(this.isLoggedIn==false){
      this.is_superUser = false;
      this.user_type = '';
      this.user = {} as User;
    }
    else{
      this.is_superUser = this.recUser.getUserWithoutRequest().is_superuser;
      this.user_type = this.recUser.getUserWithoutRequest().user_type;
      this.user = this.recUser.getUserWithoutRequest();
    }
  }


}
