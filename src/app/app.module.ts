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
