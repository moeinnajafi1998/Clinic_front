import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalAppointment } from 'src/app/models/MedicalAppointment';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clinic-medicalappointment',
  templateUrl: './clinic-medicalappointment.component.html',
  styleUrls: ['./clinic-medicalappointment.component.css']
})
export class ClinicMedicalappointmentComponent {
  constructor(private http:HttpService,private router:Router){}

  medical_appointments : MedicalAppointment[] = [];

  ngOnInit(){
    this.http.medicalAppointmentsForTypical_User().pipe().subscribe(res=>{
      this.medical_appointments = res;
    })
  }


  changeStatus(id:number){
    this.http.changeStatusMedicalAppointment(id).pipe().subscribe(res=>{
      this.router.navigate(['/']);
    })
  }
}
