import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sicks',
  templateUrl: './sicks.component.html',
  styleUrls: ['./sicks.component.css']
})
export class SicksComponent {
  constructor(private http:HttpService){}

  sicks : User[] = [];

  ngOnInit(){
    this.http.sicks().pipe().subscribe(res=>{
      this.sicks = res;
    })
  }
}
