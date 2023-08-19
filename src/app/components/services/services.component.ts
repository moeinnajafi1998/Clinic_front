import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/Service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private http:HttpService,private router:Router){}
  services : Service[] = [];
  ngOnInit(){
    this.http.services().pipe().subscribe(res=>{
      this.services = res;
    })
  }

  serviceDetails(id:number){
    this.router.navigate([`/service/${id}`]);
  }

}
