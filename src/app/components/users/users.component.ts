import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private http:HttpService,private router:Router){}

  users : User[] = [];

  ngOnInit(){
    this.http.users().pipe().subscribe(res=>{
      this.users = res;
    })
  }


  deleteUser(e:Event,id:number){
    this.http.deleteUser(id).pipe().subscribe(res=>{
      console.log(res);
      this.router.navigate(['/']);
    })
  }

}
