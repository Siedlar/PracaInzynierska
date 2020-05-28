import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/klasy/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrls: ['./konto.component.css']
})
export class KontoComponent implements OnInit {

  users: User[];
 
  constructor(private userService: UserServiceService) {
  }
 

  ngOnInit() {
   
    

}
}
