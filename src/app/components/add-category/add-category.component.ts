import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
declare var $:any;
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  formData = new FormData();

  constructor(private http:HttpService,private router:Router){}

  ngOnInit(){

  }


  addCategory(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('type',$('#type').val());

    this.http.createCategory(this.formData).pipe().subscribe(
      res=>{
        this.router.navigate(['/categories/']);
      }
    )

  }
}
