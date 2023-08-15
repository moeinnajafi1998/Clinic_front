import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';
declare var $ : any;

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent {
  clinicAdmins : User[] = [];
  typical_users : User[] = [];
  formData = new FormData();

  constructor(private http:HttpService,private router:Router){}

  ngOnInit(){
    this.http.clinicAdmins().pipe().subscribe(res=>{
      this.clinicAdmins = res;
    });

    this.http.typicalUsers().pipe().subscribe(res=>{
      this.typical_users = res;
    });
  }


  addClinic(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('address',$('#address').val());
    this.formData.append('manager',$('#manager').val());
    this.formData.append('typical_user',$('#typical_user').val());
    this.http.createClinic(this.formData).pipe().subscribe(
      res=>{
        this.router.navigate(['/clinics/']);
      }
    )

  }
}
