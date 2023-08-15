import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WhareHouse } from 'src/app/models/WhareHouse';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-wharehouses',
  templateUrl: './wharehouses.component.html',
  styleUrls: ['./wharehouses.component.css']
})
export class WharehousesComponent {

  constructor(private http:HttpService,private router:Router){}
  
  whareHouses : WhareHouse[] = [];

  ngOnInit(){
    this.http.whareHouses().pipe().subscribe(res=>{
      this.whareHouses = res;
    })
  }

  whareHouseDetails(id:number){
    this.router.navigate([`/wharehouse/${id}`]);
  }
}
