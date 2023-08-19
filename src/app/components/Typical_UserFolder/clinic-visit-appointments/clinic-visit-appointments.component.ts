import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VisitAppointment } from 'src/app/models/VisitAppointment';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clinic-visit-appointments',
  templateUrl: './clinic-visit-appointments.component.html',
  styleUrls: ['./clinic-visit-appointments.component.css']
})
export class ClinicVisitAppointmentsComponent {
  constructor(private http:HttpService,private router:Router){}

  visit_appointments : VisitAppointment[] = [];

  ngOnInit(){
    this.http.VisitAppointmentForTypical_User().pipe().subscribe(res=>{
      this.visit_appointments = res;
    })
  }
}
