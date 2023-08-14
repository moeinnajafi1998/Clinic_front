import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clinic } from 'src/app/models/Clinic';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent {

  constructor(private http:HttpService,private router:Router) { }
  clinics : Clinic[] = [];
  ngOnInit(){
    this.http.clinics().pipe().subscribe(res=>{
      this.clinics = res;
    })
  }


  clinicDetails(id:number){
    this.router.navigate([`/clinic/${id}`]);
  }

}
