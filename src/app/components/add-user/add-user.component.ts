import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
declare var $ : any;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  formData = new FormData();
  images: File[]=[];

  constructor(private http:HttpService,private router:Router){}





  createUser(e:Event){
    e.preventDefault();
    this.formData.append('username',$('#username').val());
    this.formData.append('password',$('#password').val());
    this.formData.append('is_superuser',$('input[name="is_superuser"]:checked').val());
    this.formData.append('is_staff',$('input[name="staff"]:checked').val());
    this.formData.append('user_type',$('#user_type').val());
    for (let i = 0; i < this.images.length; i++) {
      this.formData.append('image', this.images[i]);
    }

    this.http.createUser(this.formData).pipe().subscribe(res=>{
      console.log(res);
      this.router.navigate(['/users/']);
    });
  }


  handleFileInput(event: any) {
    event.preventDefault();
    this.images = event.target.files;
  }


}
