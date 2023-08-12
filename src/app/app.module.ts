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
import { PermissionsComponent } from './components/permissions/permissions/permissions.component';
import { UpdatePermissionComponent } from './components/permissions/update-permission/update-permission.component';
import { CreatePermissionComponent } from './components/permissions/create-permission/create-permission.component';
import { TypicalUsersComponent } from './components/typical-users/typical-users.component';

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
    UpdatePermissionComponent,
    CreatePermissionComponent,
    TypicalUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
