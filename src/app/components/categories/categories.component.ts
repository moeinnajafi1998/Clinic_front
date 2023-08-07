import { Component } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private http:HttpService) { }

  categories : Category[] = [];
  ngOnInit(){
    this.http.categories().pipe().subscribe(res=>{
      this.categories = res;
    })
  }
}
