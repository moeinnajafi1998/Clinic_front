import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Credential, User } from '../models/User';
import { Token } from '../models/Token';
import { Clinic } from '../models/Clinic';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


  userRecognization(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User>('http://127.0.0.1:8000/management/user-recognization',options)
    return result;
  }


  logIn(credential:Credential){
    const result = this.http.post<Token>('http://127.0.0.1:8000/token-auth',credential)
    return result;
  }

  testToken(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<number>('http://127.0.0.1:8000/management/test-token',options)
    return result;
  }


  clinics(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<Clinic[]>('http://127.0.0.1:8000/management/clinics/',options)
    return result;
  }

  
}
