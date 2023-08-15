import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

declare var $ : any;
@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.css']
})
export class AddPermissionComponent {
  formData = new FormData();

  constructor(private http:HttpService,private router:Router){}


  createPermission(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('codename',$('#codename').val());
    this.formData.append('content_type','4');
    this.http.createPermission(this.formData).pipe().subscribe(res=>{
      this.router.navigate(['/permissions/']);
    });
  }
}
