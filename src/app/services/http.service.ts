import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Credential, User } from '../models/User';
import { Token } from '../models/Token';
import { Clinic } from '../models/Clinic';
import { Category } from '../models/Category';
import { PermissionFull } from '../models/Permission';

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


  createClinic(form:FormData){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.post<Clinic>('http://127.0.0.1:8000/management/clinics/',form,options)
    return result;
  }
  

  categories(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<Category[]>('http://127.0.0.1:8000/management/categories/',options)
    return result;
  }


  clinicAdmins(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User[]>('http://127.0.0.1:8000/management/clinic-admins/',options)
    return result;
  }


  typicalUsers(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User[]>('http://127.0.0.1:8000/management/typical-users/',options)
    return result;
  }


  nurses(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User[]>('http://127.0.0.1:8000/management/nurse-list/',options)
    return result;
  }


  sicks(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User[]>('http://127.0.0.1:8000/management/sick-list/',options)
    return result;
  }

  
  users(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User[]>('http://127.0.0.1:8000/management/users/',options)
    return result;
  }


  permissions(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<PermissionFull[]>('http://127.0.0.1:8000/management/list-permissions/',options)
    return result;
  }
  

  deletePermission(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.delete(`http://127.0.0.1:8000/management/delete-permission/${id}/`,options)
    return result;
  }

  
}
