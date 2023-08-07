import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReportComponent } from './components/report/report.component';
import { superUserGuard } from './guards/super-user.guard';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { clinicAdminGuard } from './guards/clinic-admin.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'report',component:ReportComponent,canActivate:[superUserGuard]},
  {path:'clinics',component:ClinicsComponent,canActivate:[superUserGuard]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
