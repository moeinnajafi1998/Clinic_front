import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Credential, User } from '../models/User';
import { Token } from '../models/Token';
import { Clinic } from '../models/Clinic';
import { Category } from '../models/Category';
import { PermissionFull } from '../models/Permission';
import { Item } from '../models/Item';
import { WhareHouse } from '../models/WhareHouse';
import { SessionReuest } from '../models/SessionRequest';

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
  // Item APIs
  items(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<Item[]>('http://127.0.0.1:8000/management/items/',options)
    return result;
  }

  createItem(form:FormData){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.post<Item>('http://127.0.0.1:8000/management/item-create/',form,options)
    return result;
  }

  retrieveItem(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<Item>(`http://127.0.0.1:8000/management/item-retrieve/${id}/`,options)
    return result;
  }

  updateItem(form:FormData,id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.patch<Item>(`http://127.0.0.1:8000/management/item-update/${id}/`,form,options)
    return result;
  }

  deleteItem(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.delete(`http://127.0.0.1:8000/management/item-delete/${id}/`,options)
    return result;
  }
  // WhareHouse APIs
  whareHouses(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<WhareHouse[]>('http://127.0.0.1:8000/management/wharehouses/',options)
    return result;
  }

  createWhareHouse(form:FormData){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.post<WhareHouse>('http://127.0.0.1:8000/management/wharehouse-create/',form,options)
    return result;
  }

  retrieveWhareHouse(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<WhareHouse>(`http://127.0.0.1:8000/management/wharehouse-retrieve/${id}/`,options)
    return result;
  }

  updateWhareHouse(form:FormData,id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.patch<WhareHouse>(`http://127.0.0.1:8000/management/wharehouse-update/${id}/`,form,options)
    return result;
  }

  deleteWhareHouse(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.delete(`http://127.0.0.1:8000/management/wharehouse-delete/${id}/`,options)
    return result;
  }
  // Permission APIs
  permissions(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<PermissionFull[]>('http://127.0.0.1:8000/management/permissions/',options)
    return result;
  }

  createPermission(form:FormData){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.post<PermissionFull>('http://127.0.0.1:8000/management/permission-create/',form,options)
    return result;
  }

  retrievePermission(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<PermissionFull>(`http://127.0.0.1:8000/management/permission-retrieve/${id}/`,options)
    return result;
  }

  updatePermission(form:FormData,id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.patch<PermissionFull>(`http://127.0.0.1:8000/management/permission-update/${id}/`,form,options)
    return result;
  }

  deletePermission(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.delete(`http://127.0.0.1:8000/management/permission-delete/${id}/`,options)
    return result;
  }
  // User APIs
  users(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User[]>('http://127.0.0.1:8000/management/users/',options)
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
    const result = this.http.get<User[]>('http://127.0.0.1:8000/management/nurses/',options)
    return result;
  }

  sicks(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User[]>('http://127.0.0.1:8000/management/sicks/',options)
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
  
  createUser(form:FormData){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.post<User>('http://127.0.0.1:8000/management/user-create/',form,options)
    return result;
  }

  retrieveUser(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<User>(`http://127.0.0.1:8000/management/user-retrieve/${id}/`,options)
    return result;
  }

  updateUser(form:FormData,id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.patch<User>(`http://127.0.0.1:8000/management/user-update/${id}/`,form,options)
    return result;
  }

  deleteUser(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.delete(`http://127.0.0.1:8000/management/user-delete/${id}/`,options)
    return result;
  }
  // other APIs
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
  // SessionReuest APIs
  createSessionRequest(form:FormData){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.post<string>('http://127.0.0.1:8000/registeration/requestsession-create/',form,options)
    return result;
  }

  requestsessionsforsick(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<SessionReuest[]>('http://127.0.0.1:8000/registeration/requestsessionsforsick/',options)
    return result;
  }

  requestsessionsForTypical_user(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<SessionReuest[]>('http://127.0.0.1:8000/registeration/requestsessionsforTypical_user/',options)
    return result;
  }

  requestsessions(){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.get<SessionReuest[]>('http://127.0.0.1:8000/registeration/requestsessions/',options)
    return result;
  }

  changeStatusrequestsession(id:number){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.patch<SessionReuest>(`http://127.0.0.1:8000/registeration/requestsession-update/${id}/`,{},options)
    return result;
  }
  // medicalappointment APIs
  createMedicalAppointment(form:FormData){
    let headers = new HttpHeaders({"Authorization":"token " + localStorage.getItem("token")});
    let options = {headers:headers}
    const result = this.http.post<string>('http://127.0.0.1:8000/registeration/medicalappointment-create/',form,options)
    return result;
  }
  
  
}
