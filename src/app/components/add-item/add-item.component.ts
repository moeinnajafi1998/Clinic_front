import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { WhareHouse } from 'src/app/models/WhareHouse';
import { HttpService } from 'src/app/services/http.service';
declare var $ :any;
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  formData = new FormData();
  images: File[]=[];
  constructor(private http:HttpService,private router:Router){}
  categories : Category[] = [];
  whareHouses : WhareHouse[] = [];
  ngOnInit(){
    this.http.categories().pipe().subscribe(res=>{
      this.categories = res;
    })

    this.http.whareHouses().pipe().subscribe(res=>{
      this.whareHouses = res;
    })
  }


  createItem(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('number',$('#number').val());
    this.formData.append('category',$('#category').val());
    this.formData.append('wharehouse',$('#whareHouse').val());

    for (let i = 0; i < this.images.length; i++) {
      this.formData.append('image', this.images[i]);
    }

    this.http.createItem(this.formData).pipe().subscribe(res=>{
      this.router.navigate(['/items/']);
    });
  }

  handleFileInput(event: any) {
    event.preventDefault();
    this.images = event.target.files;
  }

}
