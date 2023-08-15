import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinic } from 'src/app/models/Clinic';
import { HttpService } from 'src/app/services/http.service';

declare var $ : any;
@Component({
  selector: 'app-wharehouse-details',
  templateUrl: './wharehouse-details.component.html',
  styleUrls: ['./wharehouse-details.component.css']
})
export class WharehouseDetailsComponent {
  formData = new FormData();
  id = this.route.snapshot.params['id'];
  clinics : Clinic[] = [];

  constructor(private http:HttpService,private router:Router,private route:ActivatedRoute){}
  
  ngOnInit(){
    this.http.clinics().pipe().subscribe(res=>{
      this.clinics = res;
    })

    this.http.retrieveWhareHouse(this.id).pipe().subscribe(res=>{
      $('#name').val(res.name);
      $('#clinic').val(res.clinic);
    })
  }


  updateWhareHouse(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('clinic',$('#clinic').val());

    this.http.updateWhareHouse(this.formData,this.id).pipe().subscribe(res=>{
      this.router.navigate(['/wharehouses/']);
    });
  }


  deleteWhareHouse(e:Event){
    e.preventDefault();
    this.http.deleteWhareHouse(this.id).pipe().subscribe(
      res=>{
        this.router.navigate(['/wharehouses/']);
      }
    )
  }
}
