import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionReuest } from 'src/app/models/SessionRequest';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sick-sessionrequests',
  templateUrl: './sick-sessionrequests.component.html',
  styleUrls: ['./sick-sessionrequests.component.css']
})
export class SickSessionrequestsComponent {
  constructor(private http:HttpService,private router:Router){}

  sessions : SessionReuest[] = [];

  ngOnInit(){
    this.http.requestsessionsforsick().pipe().subscribe(res=>{
      this.sessions = res;
    })
  }

}
