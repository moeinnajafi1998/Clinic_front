import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clinic-admins',
  templateUrl: './clinic-admins.component.html',
  styleUrls: ['./clinic-admins.component.css']
})
export class ClinicAdminsComponent {
  constructor(private http:HttpService){}

  clinicAdmins : User[] = [];

  ngOnInit(){
    this.http.clinicAdmins().pipe().subscribe(res=>{
      this.clinicAdmins = res;
    })
  }

}
