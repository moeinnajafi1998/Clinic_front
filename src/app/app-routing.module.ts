import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReportComponent } from './components/report/report.component';
import { superUserGuard } from './guards/super-user.guard';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { clinicAdminGuard } from './guards/clinic-admin.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddClinicComponent } from './components/add-clinic/add-clinic.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersComponent } from './components/users/users.component';
import { ClinicAdminsComponent } from './components/clinic-admins/clinic-admins.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { TypicalUsersComponent } from './components/typical-users/typical-users.component';
import { NursesComponent } from './components/nurses/nurses.component';
import { SicksComponent } from './components/sicks/sicks.component';
import { WarehouseKeepersComponent } from './components/warehouse-keepers/warehouse-keepers.component';
import { FinancialManagersComponent } from './components/financial-managers/financial-managers.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ClinicDetailsComponent } from './components/clinic-details/clinic-details.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { WharehousesComponent } from './components/wharehouses/wharehouses.component';
import { AddWharehouseComponent } from './components/add-wharehouse/add-wharehouse.component';
import { WharehouseDetailsComponent } from './components/wharehouse-details/wharehouse-details.component';
import { AddPermissionComponent } from './components/add-permission/add-permission.component';
import { PermissionDetailsComponent } from './components/permission-details/permission-details.component';
import { UserDatailsComponent } from './components/user-datails/user-datails.component';
import { AddSessionRequestComponent } from './components/SickFolder/add-session-request/add-session-request.component';
import { sickGuard } from './guards/sick.guard';
import { SickSessionrequestsComponent } from './components/SickFolder/sick-sessionrequests/sick-sessionrequests.component';
import { ClinicSessionrequestsComponent } from './components/Typical_UserFolder/clinic-sessionrequests/clinic-sessionrequests.component';
import { typicalUserGuard } from './guards/typical-user.guard';
import { RequestsessionsComponent } from './components/requestsessions/requestsessions.component';
import { AddMedicalAppointmentComponent } from './components/Typical_UserFolder/add-medical-appointment/add-medical-appointment.component';
import { ClinicMedicalappointmentComponent } from './components/Typical_UserFolder/clinic-medicalappointment/clinic-medicalappointment.component';
import { SickMedicalappointmentsComponent } from './components/SickFolder/sick-medicalappointments/sick-medicalappointments.component';
import { MedicalappointmentsComponent } from './components/medicalappointments/medicalappointments.component';
import { AddRequestGoodComponent } from './components/Typical_UserFolder/add-request-good/add-request-good.component';
import { ClinicRequestgoodsComponent } from './components/Typical_UserFolder/clinic-requestgoods/clinic-requestgoods.component';
import { RequestgoodsComponent } from './components/requestgoods/requestgoods.component';
import { SuperUserAndWhareHouseKeeper } from './guards/SuperUserAndWhareHouseKeeper.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  // Clinic routes
  {path:'clinics',component:ClinicsComponent,canActivate:[superUserGuard]},
  {path:'add-clinic',component:AddClinicComponent,canActivate:[superUserGuard]},
  {path:'clinic/:id',component:ClinicDetailsComponent,canActivate:[superUserGuard]},
  // Category routes
  {path:'categories',component:CategoriesComponent,canActivate:[superUserGuard]},
  {path:'add-category',component:AddCategoryComponent,canActivate:[superUserGuard]},
  {path:'category/:id',component:CategoryDetailsComponent,canActivate:[superUserGuard]},
  // Item routes
  {path:'items',component:ItemsComponent,canActivate:[superUserGuard]},
  {path:'add-item',component:AddItemComponent,canActivate:[superUserGuard]},
  {path:'item/:id',component:ItemDetailsComponent,canActivate:[superUserGuard]},
  // WhareHouse routes
  {path:'wharehouses',component:WharehousesComponent,canActivate:[superUserGuard]},
  {path:'add-wharehouse',component:AddWharehouseComponent,canActivate:[superUserGuard]},
  {path:'wharehouse/:id',component:WharehouseDetailsComponent,canActivate:[superUserGuard]},
  // Permission routes
  {path:'permissions',component:PermissionsComponent,canActivate:[superUserGuard]},
  {path:'add-permission',component:AddPermissionComponent,canActivate:[superUserGuard]},
  {path:'permission/:id',component:PermissionDetailsComponent,canActivate:[superUserGuard]},
  // RequestSession routes
  {path:'requestsessions',component:RequestsessionsComponent,canActivate:[superUserGuard]},
  // User routes
  {path:'users',component:UsersComponent,canActivate:[superUserGuard]},
  {path:'clinic-admins',component:ClinicAdminsComponent,canActivate:[superUserGuard]},
  {path:'typical-users',component:TypicalUsersComponent,canActivate:[superUserGuard]},
  {path:'nurses',component:NursesComponent,canActivate:[superUserGuard]},
  {path:'sicks',component:SicksComponent,canActivate:[superUserGuard]},
  {path:'warehouse-keepers',component:WarehouseKeepersComponent,canActivate:[superUserGuard]},
  {path:'financial-managers',component:FinancialManagersComponent,canActivate:[superUserGuard]},
  {path:'medicalappointments',component:MedicalappointmentsComponent,canActivate:[superUserGuard]},
  {path:'add-user',component:AddUserComponent,canActivate:[superUserGuard]},
  {path:'user/:id',component:UserDatailsComponent,canActivate:[superUserGuard]},
  // Other routes
  {path:'report',component:ReportComponent,canActivate:[superUserGuard]},
  // Sick routes
  {path:'add-sessionrequest',component:AddSessionRequestComponent,canActivate:[sickGuard]},
  {path:'sick-sessionrequests',component:SickSessionrequestsComponent,canActivate:[sickGuard]},
  {path:'sick-medicalappointments',component:SickMedicalappointmentsComponent,canActivate:[sickGuard]},
  // Typical_User routes
  {path:'clinic-sessionrequests',component:ClinicSessionrequestsComponent,canActivate:[typicalUserGuard]},
  {path:'clinic-requestgoods',component:ClinicRequestgoodsComponent,canActivate:[typicalUserGuard]},
  {path:'add-medicalappointment',component:AddMedicalAppointmentComponent,canActivate:[typicalUserGuard]},
  {path:'typical_user-medicalappointments',component:ClinicMedicalappointmentComponent,canActivate:[typicalUserGuard]},
  {path:'add-requestgood',component:AddRequestGoodComponent,canActivate:[typicalUserGuard]},
  // common between SuperUser and WhareHouseKeeper
  {path:'requestgoods',component:RequestgoodsComponent,canActivate:[SuperUserAndWhareHouseKeeper]},




  




  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
