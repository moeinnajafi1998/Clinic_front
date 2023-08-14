import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  constructor(private http:HttpService,private router:Router){}
  items : Item[] = [];
  ngOnInit(){
    this.http.items().pipe().subscribe(res=>{
      this.items = res;
    })
  }

  itemDetails(id:number){
    this.router.navigate([`/item/${id}`]);
  }

}
