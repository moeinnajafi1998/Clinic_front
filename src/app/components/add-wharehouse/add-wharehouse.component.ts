import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clinic } from 'src/app/models/Clinic';
import { HttpService } from 'src/app/services/http.service';

declare var $ : any;
@Component({
  selector: 'app-add-wharehouse',
  templateUrl: './add-wharehouse.component.html',
  styleUrls: ['./add-wharehouse.component.css']
})
export class AddWharehouseComponent {
  formData = new FormData();
  constructor(private http:HttpService,private router:Router){}
  clinics : Clinic[] = [];

  ngOnInit(){
    this.http.clinics().pipe().subscribe(res=>{
      this.clinics = res;
    })
  }


  createWhareHouse(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('clinic',$('#clinic').val());
    this.http.createWhareHouse(this.formData).pipe().subscribe(res=>{
      this.router.navigate(['/wharehouses/']);
    });
  }

}
