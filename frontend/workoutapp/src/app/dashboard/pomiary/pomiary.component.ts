import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/klasy/user';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Wymiary } from 'src/app/klasy/wymiary';

@Component({
  selector: 'app-pomiary',
  templateUrl: './pomiary.component.html',
  styleUrls: ['./pomiary.component.css']
})
export class PomiaryComponent implements OnInit {

  user: User;
 
  constructor(private userService: UserServiceService) {
  }
 

  ngOnInit() {
   
    this.userService.getUser(sessionStorage.getItem("current_user")).subscribe(
      data => {
        this.user = data;
        this.user.listaWymiarow.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
      }
    );
  }
  usunpomiar(wymiary:Wymiary) {   
    this.userService.usunpomiar(wymiary.id_WYMIARY).subscribe(
      data => { 
        alert("Udało się pomyslnie usunąć pomiar!!!")
          window.location.reload();
      },
      error => { 
        alert("Nie udało się usunąć pomiaru, spróbuj ponownie")
      }
      )
  }
}