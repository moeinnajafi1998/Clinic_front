import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private http:HttpService){}

  users : User[] = [];

  ngOnInit(){
    this.http.users().pipe().subscribe(res=>{
      this.users = res;
    })
  }

}
