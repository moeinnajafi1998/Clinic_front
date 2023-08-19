import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
declare var $:any;
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent {
  formData = new FormData();
  id = this.route.snapshot.params['id'];
  constructor(private http:HttpService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(){
    this.http.retrieveService(this.id).pipe().subscribe(res=>{
      $('#name').val(res.name);
      $('#description').val(res.description);
    })
  }


  updateService(e:Event){
    e.preventDefault();
    this.formData.append('name',$('#name').val());
    this.formData.append('description',$('#description').val());

    this.http.updateService(this.formData,this.id).pipe().subscribe(res=>{
      this.router.navigate(['/services/']);
    });
  }

  deleteService(e:Event){
    e.preventDefault();
    this.http.deleteService(this.id).pipe().subscribe(
      res=>{
        this.router.navigate(['/services/']);
      }
    )
  }
}
