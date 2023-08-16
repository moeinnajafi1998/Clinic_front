import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clinic } from 'src/app/models/Clinic';
import { HttpService } from 'src/app/services/http.service';
declare var $ : any;

@Component({
  selector: 'app-add-medical-appointment',
  templateUrl: './add-medical-appointment.component.html',
  styleUrls: ['./add-medical-appointment.component.css']
})
export class AddMedicalAppointmentComponent {
  clinics : Clinic[] = [];
  formData = new FormData();

  constructor(private http:HttpService,private router:Router){}

  ngOnInit(){
    this.http.clinics().pipe().subscribe(res=>{
      this.clinics = res;
    });
  }


  createMedicalAppointment(e:Event){
    e.preventDefault();
    this.formData.append('clinic',$('#clinic').val());
    this.formData.append('sick',$('#sick').val());
    this.formData.append('nurse',$('#nurse').val());
    this.formData.append('description',$('#description').val());
    this.formData.append('date',$('#date').val());
    this.formData.append('time',$('#time').val());
    this.http.createMedicalAppointment(this.formData).pipe().subscribe(
      res=>{
        alert(JSON.stringify(res));
        // this.router.navigate(['/']);
      }
    )

  }
}
