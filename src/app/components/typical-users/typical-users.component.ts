import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-typical-users',
  templateUrl: './typical-users.component.html',
  styleUrls: ['./typical-users.component.css']
})
export class TypicalUsersComponent {
  constructor(private http:HttpService){}

  typicalUsers : User[] = [];

  ngOnInit(){
    this.http.typicalUsers().pipe().subscribe(res=>{
      this.typicalUsers = res;
    })
  }
}
