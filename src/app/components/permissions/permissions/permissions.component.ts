import { Component } from '@angular/core';
import { PermissionFull } from 'src/app/models/Permission';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent {
  constructor(private http:HttpService){}

  permissions:PermissionFull[] = [];

  ngOnInit(){
    this.http.permissions().pipe().subscribe(res=>{
      this.permissions = res;
      console.log(res);
    })
  }





  DeletePermissionComponent(e:Event,id:number){
    console.log("permission id = " + id);
    this.http.deletePermission(id).pipe().subscribe(res=>{
      alert("حذف شد.");
    })
  }

}
