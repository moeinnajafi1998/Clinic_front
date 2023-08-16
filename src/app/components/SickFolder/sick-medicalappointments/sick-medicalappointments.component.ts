import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalAppointment } from 'src/app/models/MedicalAppointment';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sick-medicalappointments',
  templateUrl: './sick-medicalappointments.component.html',
  styleUrls: ['./sick-medicalappointments.component.css']
})
export class SickMedicalappointmentsComponent {
  constructor(private http:HttpService,private router:Router){}

  medical_appointments : MedicalAppointment[] = [];

  ngOnInit(){
    this.http.medicalAppointmentsForsick().pipe().subscribe(res=>{
      this.medical_appointments = res;
    })
  }
}
