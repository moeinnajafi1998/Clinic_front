import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RecognizationService {
  
  constructor(private http:HttpService) { }

  recognizedUser = {} as User;

  user(){
    this.http.userRecognization().pipe().subscribe(res=>{
      this.recognizedUser = res;
    })
    return this.recognizedUser;
  }

}
