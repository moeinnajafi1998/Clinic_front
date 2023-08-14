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
import { PermissionsComponent } from './components/permissions/permissions/permissions.component';
import { TypicalUsersComponent } from './components/typical-users/typical-users.component';
import { NursesComponent } from './components/nurses/nurses.component';
import { SicksComponent } from './components/sicks/sicks.component';
import { WarehouseKeepersComponent } from './components/warehouse-keepers/warehouse-keepers.component';
import { FinancialManagersComponent } from './components/financial-managers/financial-managers.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ClinicDetailsComponent } from './components/clinic-details/clinic-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  // Clinic routes
  {path:'clinics',component:ClinicsComponent,canActivate:[superUserGuard]},
  {path:'add-clinic',component:AddClinicComponent,canActivate:[superUserGuard]},
  {path:'clinic/:id',component:ClinicDetailsComponent,canActivate:[superUserGuard]},














  {path:'report',component:ReportComponent,canActivate:[superUserGuard]},
  {path:'categories',component:CategoriesComponent,canActivate:[superUserGuard]},

  {path:'users',component:UsersComponent,canActivate:[superUserGuard]},
  {path:'nurses',component:NursesComponent,canActivate:[superUserGuard]},
  {path:'sicks',component:SicksComponent,canActivate:[superUserGuard]},
  {path:'clinic-admins',component:ClinicAdminsComponent,canActivate:[superUserGuard]},
  {path:'typical-users',component:TypicalUsersComponent,canActivate:[superUserGuard]},
  {path:'warehouse-keepers',component:WarehouseKeepersComponent,canActivate:[superUserGuard]},
  {path:'financial-managers',component:FinancialManagersComponent,canActivate:[superUserGuard]},

  {path:'add-user',component:AddUserComponent,canActivate:[superUserGuard]},



  {path:'permissions',component:PermissionsComponent,canActivate:[superUserGuard]},






  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
