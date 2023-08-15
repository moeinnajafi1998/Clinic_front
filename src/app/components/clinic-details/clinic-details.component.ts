import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';
declare var $ : any;
@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css']
})
export class ClinicDetailsComponent {
  clinicAdmins : User[] = [];
  typical_users : User[] = [];

  formData = new FormData();
  id = this.route.snapshot.params['id'];
  constructor(private http:HttpService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(){
    this.http.clinicAdmins().pipe().subscribe(res=>{
      this.clinicAdmins = res;
    })

    this.http.typicalUsers().pipe().subscribe(res=>{
      this.typical_users = res;
    })

    this.http.retrieveClinic(this.id).pipe().subscribe(res=>{
      $('#name').val(res.name);
      $('#address').val(res.address);
    })

  }


  editClinic(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('address',$('#address').val());
    this.formData.append('manager',$('#manager').val());
    this.formData.append('typical_user',$('#typical_user').val());
    this.http.updateClinic(this.formData,this.id).pipe().subscribe(
      res=>{
        this.router.navigate(['/clinics/']);
      }
    )
  }



  deleteClinic(e:Event){
    e.preventDefault();
    this.http.deleteClinic(this.id).pipe().subscribe(
      res=>{
        this.router.navigate(['/clinics/']);
      }
    )
  }
}
