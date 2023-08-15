import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
declare var $ : any;
@Component({
  selector: 'app-user-datails',
  templateUrl: './user-datails.component.html',
  styleUrls: ['./user-datails.component.css']
})
export class UserDatailsComponent {
  formData = new FormData();
  images: File[]=[];
  id = this.route.snapshot.params['id'];
  imageSrc : string = "";
  constructor(private http:HttpService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(){
    this.http.retrieveUser(this.id).pipe().subscribe(res=>{
      $('#username').val(res.username);
      $('#user_type').val(res.user_type);
      this.imageSrc = res.image;
    })
  }



  updateUser(e:Event){
    e.preventDefault();
    this.formData.append('username',$('#username').val());
    this.formData.append('password',$('#password').val());
    this.formData.append('is_superuser',$('input[name="is_superuser"]:checked').val());
    this.formData.append('is_staff',$('input[name="staff"]:checked').val());
    this.formData.append('user_type',$('#user_type').val());
    if($('#user_type').val()==null){
      this.formData.append('user_type','');
    }
    for (let i = 0; i < this.images.length; i++) {
      this.formData.append('image', this.images[i]);
    }
    this.http.updateUser(this.formData,this.id).pipe().subscribe(res=>{
      console.log(res);
      this.router.navigate(['/users/']);
    });
  }


  handleFileInput(event: any) {
    event.preventDefault();
    this.images = event.target.files;
  }

  deleteUser(e:Event){
    e.preventDefault();
    this.http.deleteUser(this.id).pipe().subscribe(
      res=>{
        this.router.navigate(['/users/']);
      }
    )
  }
}
