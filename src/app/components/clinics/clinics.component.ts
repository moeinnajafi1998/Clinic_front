import { Component } from '@angular/core';
import { Clinic } from 'src/app/models/Clinic';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent {

  constructor(private http:HttpService) { }
  clinics : Clinic[] = [];
  ngOnInit(){
    this.http.clinics().pipe().subscribe(res=>{
      this.clinics = res;
    })
  }

}
