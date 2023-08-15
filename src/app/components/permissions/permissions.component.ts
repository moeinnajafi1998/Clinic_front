import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionFull } from 'src/app/models/Permission';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent {
  constructor(private http:HttpService,private router:Router){}

  permissions:PermissionFull[] = [];

  ngOnInit(){
    this.http.permissions().pipe().subscribe(res=>{
      this.permissions = res;
      console.log(res);
    })
  }





  permissionDetails(id:number){
    this.router.navigate([`/permission/${id}`]);
  }


}
