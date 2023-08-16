import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clinic } from 'src/app/models/Clinic';
import { HttpService } from 'src/app/services/http.service';
declare var $ : any;
@Component({
  selector: 'app-add-session-request',
  templateUrl: './add-session-request.component.html',
  styleUrls: ['./add-session-request.component.css']
})
export class AddSessionRequestComponent {
  clinics : Clinic[] = [];
  formData = new FormData();

  constructor(private http:HttpService,private router:Router){}

  ngOnInit(){
    this.http.clinics().pipe().subscribe(res=>{
      this.clinics = res;
    });
  }


  createSessionRequest(e:Event){
    e.preventDefault();
    this.formData.append('clinic',$('#clinic').val());
    this.formData.append('description',$('#description').val());
    this.http.createSessionRequest(this.formData).pipe().subscribe(
      res=>{
        alert(JSON.stringify(res));
        this.router.navigate(['/sick-sessionrequests/']);
      }
    )

  }
}
