import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Section1Component } from './components/section1/section1.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './components/report/report.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
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
import { AddItemComponent } from './components/add-item/add-item.component';
import { AddPermissionComponent } from './components/add-permission/add-permission.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { PermissionDetailsComponent } from './components/permission-details/permission-details.component';
import { ItemsComponent } from './components/items/items.component';
import { WharehousesComponent } from './components/wharehouses/wharehouses.component';
import { AddWharehouseComponent } from './components/add-wharehouse/add-wharehouse.component';
import { WharehouseDetailsComponent } from './components/wharehouse-details/wharehouse-details.component';
import { UserDatailsComponent } from './components/user-datails/user-datails.component';
import { AddSessionRequestComponent } from './components/SickFolder/add-session-request/add-session-request.component';
import { SickSessionrequestsComponent } from './components/SickFolder/sick-sessionrequests/sick-sessionrequests.component';
import { ClinicSessionrequestsComponent } from './components/Typical_UserFolder/clinic-sessionrequests/clinic-sessionrequests.component';
import { RequestsessionsComponent } from './components/requestsessions/requestsessions.component';
import { AddMedicalAppointmentComponent } from './components/Typical_UserFolder/add-medical-appointment/add-medical-appointment.component';
import { ClinicMedicalappointmentComponent } from './components/Typical_UserFolder/clinic-medicalappointment/clinic-medicalappointment.component';
import { SickMedicalappointmentsComponent } from './components/SickFolder/sick-medicalappointments/sick-medicalappointments.component';
import { MedicalappointmentsComponent } from './components/medicalappointments/medicalappointments.component';
import { AddRequestGoodComponent } from './components/Typical_UserFolder/add-request-good/add-request-good.component';
import { ClinicRequestgoodsComponent } from './components/Typical_UserFolder/clinic-requestgoods/clinic-requestgoods.component';
import { RequestgoodsComponent } from './components/requestgoods/requestgoods.component';
import { ServicesComponent } from './components/services/services.component';
import { AddServicesComponent } from './components/add-services/add-services.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { AddVisitAppointmentComponent } from './components/NurseFolder/add-visit-appointment/add-visit-appointment.component';
import { NurseVisitAppointmentComponent } from './components/NurseFolder/nurse-visit-appointment/nurse-visit-appointment.component';
import { VisitAppointmentComponent } from './components/visit-appointment/visit-appointment.component';
import { ClinicVisitAppointmentsComponent } from './components/Typical_UserFolder/clinic-visit-appointments/clinic-visit-appointments.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Section1Component,
    HomeComponent,
    LoginComponent,
    ReportComponent,
    ClinicsComponent,
    CategoriesComponent,
    AddClinicComponent,
    NotFoundComponent,
    UsersComponent,
    ClinicAdminsComponent,
    PermissionsComponent,
    TypicalUsersComponent,
    NursesComponent,
    SicksComponent,
    WarehouseKeepersComponent,
    FinancialManagersComponent,
    AddUserComponent,
    ClinicDetailsComponent,
    AddCategoryComponent,
    CategoryDetailsComponent,
    AddItemComponent,
    AddPermissionComponent,
    ItemDetailsComponent,
    PermissionDetailsComponent,
    ItemsComponent,
    WharehousesComponent,
    AddWharehouseComponent,
    WharehouseDetailsComponent,
    UserDatailsComponent,
    AddSessionRequestComponent,
    SickSessionrequestsComponent,
    ClinicSessionrequestsComponent,
    RequestsessionsComponent,
    AddMedicalAppointmentComponent,
    ClinicMedicalappointmentComponent,
    SickMedicalappointmentsComponent,
    MedicalappointmentsComponent,
    AddRequestGoodComponent,
    ClinicRequestgoodsComponent,
    RequestgoodsComponent,
    ServicesComponent,
    AddServicesComponent,
    ServiceDetailsComponent,
    AddVisitAppointmentComponent,
    NurseVisitAppointmentComponent,
    VisitAppointmentComponent,
    ClinicVisitAppointmentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
