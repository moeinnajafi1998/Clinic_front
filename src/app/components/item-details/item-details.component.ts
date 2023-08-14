import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { WhareHouse } from 'src/app/models/WhareHouse';
import { HttpService } from 'src/app/services/http.service';
declare var $ :any;
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  formData = new FormData();
  images: File[]=[];
  id = this.route.snapshot.params['id'];
  imageSrc : string = '';
  constructor(private http:HttpService,private router:Router,private route:ActivatedRoute){}
  categories : Category[] = [];
  whareHouses : WhareHouse[] = [];
  ngOnInit(){
    this.http.categories().pipe().subscribe(res=>{
      this.categories = res;
    })

    this.http.whareHouses().pipe().subscribe(res=>{
      this.whareHouses = res;
    })

    this.http.retrieveItem(this.id).pipe().subscribe(res=>{
      $('#name').val(res.name);
      $('#number').val(res.number);
      $('#category').val(res.category);
      $('#whareHouse').val(res.wharehouse);
      this.imageSrc = res.image;
    })
  }


  updateItem(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('number',$('#number').val());
    this.formData.append('category',$('#category').val());
    this.formData.append('wharehouse',$('#whareHouse').val());

    for (let i = 0; i < this.images.length; i++) {
      this.formData.append('image', this.images[i]);
    }

    this.http.updateItem(this.formData,this.id).pipe().subscribe(res=>{
      this.router.navigate(['/items/']);
    });
  }

  handleFileInput(event: any) {
    event.preventDefault();
    this.images = event.target.files;
  }


  deleteItem(e:Event){
    e.preventDefault();
    this.http.deleteItem(this.id).pipe().subscribe(
      res=>{
        this.router.navigate(['/items/']);
      }
    )
  }
}
