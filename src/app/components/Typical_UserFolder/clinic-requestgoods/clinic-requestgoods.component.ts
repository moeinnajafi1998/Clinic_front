import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestGood } from 'src/app/models/RequestGood';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clinic-requestgoods',
  templateUrl: './clinic-requestgoods.component.html',
  styleUrls: ['./clinic-requestgoods.component.css']
})
export class ClinicRequestgoodsComponent {
  constructor(private http:HttpService,private router:Router){}

  requestGoods : RequestGood[] = [];

  ngOnInit(){
    this.http.RequestGoodForTypical_User().pipe().subscribe(res=>{
      this.requestGoods = res;
    })
  }

}
