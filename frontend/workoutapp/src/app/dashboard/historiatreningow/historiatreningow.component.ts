import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/klasy/user';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Plan } from 'src/app/klasy/plan';


@Component({
  selector: 'app-historiatreningow',
  templateUrl: './historiatreningow.component.html',
  styleUrls: ['./historiatreningow.component.css']
})
export class HistoriatreningowComponent implements OnInit {

  user: User;
 
  constructor(private userService: UserServiceService) {
  }
 

  ngOnInit() {
   
    this.userService.getUser(sessionStorage.getItem("current_user")).subscribe(
      data => {
        this.user = data;
        this.user.listaPlanow.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
      }
    );
  }
  usunpomiar(plan:Plan) {   
    this.userService.usunplan(plan.plan_id).subscribe(
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
