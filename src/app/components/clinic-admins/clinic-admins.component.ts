import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clinic-admins',
  templateUrl: './clinic-admins.component.html',
  styleUrls: ['./clinic-admins.component.css']
})
export class ClinicAdminsComponent {
  constructor(private http:HttpService,private router:Router){}

  clinicAdmins : User[] = [];

  ngOnInit(){
    this.http.clinicAdmins().pipe().subscribe(res=>{
      this.clinicAdmins = res;
    })
  }

  userDetails(id:number){
    this.router.navigate([`/user/${id}`]);
  }

}
