import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { Service } from 'src/app/models/Service';
import { HttpService } from 'src/app/services/http.service';
declare var $ :any;
@Component({
  selector: 'app-add-visit-appointment',
  templateUrl: './add-visit-appointment.component.html',
  styleUrls: ['./add-visit-appointment.component.css']
})
export class AddVisitAppointmentComponent {
  constructor(private http:HttpService,private router:Router){}
  formData = new FormData();

  items : Item[] = [];
  services : Service[] = [];
  selected_items = [];
  selected_services = [];


  ngOnInit(){
    this.http.itemsdistinct().pipe().subscribe(res=>{
      this.items = res;
    })

    this.http.services().pipe().subscribe(res=>{
      this.services = res;
    })
  }


  addVisitAppointment(e:Event){
    e.preventDefault();
    console.log(this.selected_items);
    console.log(this.selected_services);
    this.formData.append('sick',$('#sick').val());
    this.formData.append('clinic',$('#clinic').val());
    this.formData.append('description',$('#description').val());

    for(let i of this.selected_items){
      this.formData.append('used_items', i);
    }

    for(let s of this.selected_services){
      this.formData.append('used_services', s);
    }

    this.http.createVisitAppointment(this.formData).pipe().subscribe(res=>{
      this.router.navigate(['/nurse-visitappointments/']);
    });
  }

}
