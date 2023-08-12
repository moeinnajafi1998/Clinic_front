import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-warehouse-keepers',
  templateUrl: './warehouse-keepers.component.html',
  styleUrls: ['./warehouse-keepers.component.css']
})
export class WarehouseKeepersComponent {
  constructor(private http:HttpService){}

  wareHouseKeepers : User[] = [];

  ngOnInit(){
    this.http.warehouseKeepers().pipe().subscribe(res=>{
      this.wareHouseKeepers = res;
    })
  }
}
