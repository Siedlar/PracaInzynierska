import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/klasy/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrls: ['./konto.component.css']
})
export class KontoComponent implements OnInit {
  constructor(private userService: UserServiceService) {
  }
 user:User;
waga:number;
wzrost:number;
bmi:number;
  ngOnInit() {
   
    this.userService.getUser(sessionStorage.getItem("current_user")).subscribe(
      data=>this.user=data
    );
    }
}
