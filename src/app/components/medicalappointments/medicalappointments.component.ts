import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalAppointment } from 'src/app/models/MedicalAppointment';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-medicalappointments',
  templateUrl: './medicalappointments.component.html',
  styleUrls: ['./medicalappointments.component.css']
})
export class MedicalappointmentsComponent {
  constructor(private http:HttpService,private router:Router){}

  medical_appointments : MedicalAppointment[] = [];

  ngOnInit(){
    this.http.medicalAppointments().pipe().subscribe(res=>{
      this.medical_appointments = res;
    })
  }
}
