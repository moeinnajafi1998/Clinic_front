import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

declare var $ : any;
@Component({ 
  selector: 'app-permission-details',
  templateUrl: './permission-details.component.html',
  styleUrls: ['./permission-details.component.css']
})
export class PermissionDetailsComponent {
  formData = new FormData();
  id = this.route.snapshot.params['id'];

  constructor(private http:HttpService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(){
    this.http.retrievePermission(this.id).pipe().subscribe(res=>{
      $('#name').val(res.name);
      $('#codename').val(res.codename);
    })
  }


  updatePermission(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('codename',$('#codename').val());
    // this.formData.append('content_type','4');
    this.http.updatePermission(this.formData,this.id).pipe().subscribe(res=>{
      this.router.navigate(['/permissions/']);
    });
  }


  deletePermission(e:Event){
    e.preventDefault();
    this.http.deletePermission(this.id).pipe().subscribe(
      res=>{
        this.router.navigate(['/permissions/']);
      }
    )
  }
}
