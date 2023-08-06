import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../models/User';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecognizationService {
  recognizedUser = {} as User;

  constructor(private http:HttpService) {
    console.log("we are in recUser Service");
    this.http.userRecognization().pipe().subscribe(res=>{
      this.recognizedUser = res;
    })
   }

   ngOnInit(){
    this.http.userRecognization().pipe().subscribe(res=>{
      this.recognizedUser = res;
    })
  }


  user(){
    this.http.userRecognization().pipe().subscribe(res=>{
      this.recognizedUser = res;
    })
    return this.recognizedUser;
  }

  private isLoggedIn : boolean = false;

  checkLogIn(){
    return this.isLoggedIn;
  }

  setLogIn(){
    this.isLoggedIn = true;
  }

  logOut(){
    this.isLoggedIn = false;
    localStorage.clear();
  }



  private handleError(error:HttpErrorResponse){
    this.logOut();
    Swal.fire({
      title: 'خطا!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'خطا!'
    })
    return throwError(()=>new Error(error.status + " : " + error.message));
  }

  checkUser(){
    this.http.testToken().pipe(
      catchError(this.handleError),
    ).subscribe(res=>{
      if(res==200){
        this.isLoggedIn = true;
      }
    })
    this.isLoggedIn = false;
  }


}
