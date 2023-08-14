import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private http:HttpService,private router:Router) { }

  categories : Category[] = [];
  ngOnInit(){
    this.http.categories().pipe().subscribe(res=>{
      this.categories = res;
    })
  }

  categoryDetails(id:number){
    this.router.navigate([`/category/${id}`]);
  }
}
