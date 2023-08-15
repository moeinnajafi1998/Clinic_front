import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.css']
})
export class NursesComponent {
  constructor(private http:HttpService,private router:Router){}

  nurses : User[] = [];

  ngOnInit(){
    this.http.nurses().pipe().subscribe(res=>{
      this.nurses = res;
    })
  }


  userDetails(id:number){
    this.router.navigate([`/user/${id}`]);
  }
}
