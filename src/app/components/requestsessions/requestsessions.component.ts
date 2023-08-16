import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionReuest } from 'src/app/models/SessionRequest';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-requestsessions',
  templateUrl: './requestsessions.component.html',
  styleUrls: ['./requestsessions.component.css']
})
export class RequestsessionsComponent {
  constructor(private http:HttpService,private router:Router){}

  sessions : SessionReuest[] = [];

  ngOnInit(){
    this.http.requestsessions().pipe().subscribe(res=>{
      this.sessions = res;
    })
  }
}
