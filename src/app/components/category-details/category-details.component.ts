import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
declare var $:any;
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  constructor(private http:HttpService,private router:Router,private route:ActivatedRoute){}

  formData = new FormData();
  id = this.route.snapshot.params['id'];

  ngOnInit(){

    this.http.retrieveCategory(this.id).pipe().subscribe(res=>{
      $('#name').val(res.name);
      $('#type').val(res.type);
    })

  }

  editCategory(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('type',$('#type').val());
    this.http.updateCategory(this.formData,this.id).pipe().subscribe(
      res=>{
        this.router.navigate(['/categories/']);
      }
    )
  }

  

  deleteCategory(e:Event){
    e.preventDefault();
    this.http.deleteCategory(this.id).pipe().subscribe(
      res=>{
        this.router.navigate(['/categories/']);
      }
    )
  }
}
