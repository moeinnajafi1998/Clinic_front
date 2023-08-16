import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionReuest } from 'src/app/models/SessionRequest';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clinic-sessionrequests',
  templateUrl: './clinic-sessionrequests.component.html',
  styleUrls: ['./clinic-sessionrequests.component.css']
})
export class ClinicSessionrequestsComponent {
  constructor(private http:HttpService,private router:Router){}

  sessions : SessionReuest[] = [];

  ngOnInit(){
    this.http.requestsessionsForTypical_user().pipe().subscribe(res=>{
      this.sessions = res;
    })
  }


  changeStatus(id:number){
    this.http.changeStatusrequestsession(id).pipe().subscribe(res=>{
      this.router.navigate(['/']);
    })
  }
  
}
