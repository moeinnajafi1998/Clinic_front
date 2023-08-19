import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
declare var $ :any;

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent {
  formData = new FormData();
  constructor(private http:HttpService,private router:Router){}

  ngOnInit(){}


  createService(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('description',$('#description').val());
    this.http.createService(this.formData).pipe().subscribe(res=>{
      this.router.navigate(['/services/']);
    });
  }


}
