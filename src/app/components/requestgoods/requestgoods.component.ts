import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestGood } from 'src/app/models/RequestGood';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-requestgoods',
  templateUrl: './requestgoods.component.html',
  styleUrls: ['./requestgoods.component.css']
})
export class RequestgoodsComponent {
  requestGoods : RequestGood[] = [];
  constructor(private http:HttpService,private router:Router){}

  ngOnInit(){
    this.http.RequestGoods().pipe().subscribe(res=>{
      this.requestGoods = res;
    })
  }
  
  changeStatus(id:number){
    this.http.changeIs_DoneRequestGoods(id).pipe().subscribe(res=>{
      this.router.navigate(['/']);
    })
  }
}
