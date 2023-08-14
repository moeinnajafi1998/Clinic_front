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

  // Clinic APIs
  clinics(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<Clinic[]>('http://127.0.0.1:8000/management/clinics/',options)
    return result;
  }

  createClinic(form:FormData){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.post<Clinic>('http://127.0.0.1:8000/management/clinic-create/',form,options)
    return result;
  }

  retrieveClinic(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<Clinic>(`http://127.0.0.1:8000/management/clinic-retrieve/${id}/`,options)
    return result;
  }

  updateClinic(form:FormData,id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.patch<Clinic>(`http://127.0.0.1:8000/management/clinic-update/${id}/`,form,options)
    return result;
  }

  deleteClinic(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.delete(`http://127.0.0.1:8000/management/clinic-delete/${id}/`,options)
    return result;
  }
  // Category APIs
  categories(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<Category[]>('http://127.0.0.1:8000/management/categories/',options)
    return result;
  }

  createCategory(form:FormData){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.post<Category>('http://127.0.0.1:8000/management/category-create/',form,options)
    return result;
  }

  retrieveCategory(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<Category>(`http://127.0.0.1:8000/management/category-retrieve/${id}/`,options)
    return result;
  }

  updateCategory(form:FormData,id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.patch<Category>(`http://127.0.0.1:8000/management/category-update/${id}/`,form,options)
    return result;
  }

  deleteCategory(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.delete(`http://127.0.0.1:8000/management/category-delete/${id}/`,options)
    return result;
  }





  








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


  warehouseKeepers(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User[]>('http://127.0.0.1:8000/management/warehouse-keepers/',options)
    return result;
  }


  financialManagers(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User[]>('http://127.0.0.1:8000/management/financial-managers/',options)
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


  addUser(form:FormData){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.post<object>('http://127.0.0.1:8000/management/create-user/',form,options)
    return result;
  }



  deleteUser(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.delete(`http://127.0.0.1:8000/management/delete-user/${id}/`,options)
    return result;
  }

  
}
