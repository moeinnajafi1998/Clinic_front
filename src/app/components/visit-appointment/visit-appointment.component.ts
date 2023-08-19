import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VisitAppointment } from 'src/app/models/VisitAppointment';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-visit-appointment',
  templateUrl: './visit-appointment.component.html',
  styleUrls: ['./visit-appointment.component.css']
})
export class VisitAppointmentComponent {
  constructor(private http:HttpService,private router:Router){}

  visit_appointments : VisitAppointment[] = [];

  ngOnInit(){
    this.http.VisitAppointments().pipe().subscribe(res=>{
      this.visit_appointments = res;
    })
  }
}
