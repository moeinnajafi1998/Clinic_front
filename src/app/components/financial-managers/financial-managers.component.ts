import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-financial-managers',
  templateUrl: './financial-managers.component.html',
  styleUrls: ['./financial-managers.component.css']
})
export class FinancialManagersComponent {
  constructor(private http:HttpService,private router:Router){}

  financialManagers : User[] = [];

  ngOnInit(){
    this.http.financialManagers().pipe().subscribe(res=>{
      this.financialManagers = res;
    })
  }

  userDetails(id:number){
    this.router.navigate([`/user/${id}`]);
  }
}
