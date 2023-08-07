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
  formData = new FormData();

  constructor(private http:HttpService,private router:Router){}

  ngOnInit(){
    this.http.clinicAdmins().pipe().subscribe(res=>{
      this.clinicAdmins = res;
    })
  }


  addClinic(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('address',$('#address').val());
    this.formData.append('manager',$('#manager').val());

    this.http.createClinic(this.formData).pipe().subscribe(
      res=>{
        alert(JSON.stringify(res));
        this.router.navigate(['/clinics/']);
      }
    )

  }
}
