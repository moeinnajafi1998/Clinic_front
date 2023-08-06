import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Credential } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';
import { RecognizationService } from 'src/app/services/recognization.service';
import Swal from 'sweetalert2';
declare var $ : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http:HttpService,private router:Router,private recogUser:RecognizationService) {}

  credential = {} as Credential;
  

  private handleError(error:HttpErrorResponse){
    localStorage.clear();
    // this.recogUser.logOut();
    Swal.fire({
      title: 'خطا!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'خطا!'
    })
    return throwError(()=>new Error(error.status + " : " + error.message));
  }


  login(e:Event){
    e.preventDefault();
    this.credential = {
      username : $('#username').val(),
      password : $('#password').val()
    }
    
    this.http.logIn(this.credential).pipe(
      catchError(this.handleError),
      ).subscribe((res)=>{
      localStorage.setItem('token',res.token);
      this.recogUser.setLogIn();
      this.router.navigate(['/'])
    })
  }

}
