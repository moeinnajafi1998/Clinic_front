import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clinic } from 'src/app/models/Clinic';
import { Item, Item2 } from 'src/app/models/Item';
import { HttpService } from 'src/app/services/http.service';
declare var $:any;
@Component({
  selector: 'app-add-request-good',
  templateUrl: './add-request-good.component.html',
  styleUrls: ['./add-request-good.component.css']
})
export class AddRequestGoodComponent {
  clinics : Clinic[] = [];
  items : Item2[] = [];
  formData = new FormData();

  constructor(private http:HttpService,private router:Router){}

  ngOnInit(){
    this.http.clinics().pipe().subscribe(res=>{
      this.clinics = res;
    });

    this.http.itemsNames().pipe().subscribe(res=>{
      this.items = res;
    });
  }


  createRequestGood(e:Event){
    e.preventDefault();
    this.formData.append('clinic',$('#clinic').val());
    this.formData.append('item',$('#item').val());
    this.formData.append('number',$('#number').val());
    this.formData.append('description',$('#description').val());
    this.http.createRequestGood(this.formData).pipe().subscribe(
      res=>{
        alert(JSON.stringify(res));
        // this.router.navigate(['/']);
      }
    )

  }
}
