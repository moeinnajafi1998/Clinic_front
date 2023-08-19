import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { VisitAppointment } from 'src/app/models/VisitAppointment';

@Component({
  selector: 'app-nurse-visit-appointment',
  templateUrl: './nurse-visit-appointment.component.html',
  styleUrls: ['./nurse-visit-appointment.component.css']
})
export class NurseVisitAppointmentComponent {
  constructor(private http:HttpService,private router:Router){}

  visit_appointments : VisitAppointment[] = [];

  ngOnInit(){
    this.http.VisitAppointmentForNurse().pipe().subscribe(res=>{
      this.visit_appointments = res;
    })
  }
}
