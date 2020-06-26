import { Component, OnInit, DoCheck } from '@angular/core';
import { User } from 'src/app/klasy/user';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit, DoCheck {

  constructor(private userService: UserServiceService) {
  }
  user:User =new User;
  bmi:number=0;
  wzrost:number=0;
  waga: number = 0;
  bmi_nazwa: string;
  bmi_bool: boolean=false;
  ngOnInit() {
   
    this.userService.getUser(sessionStorage.getItem("current_user")).subscribe(
      data =>
        this.user = data
       
    );
  }
    
  ngDoCheck() {
     this.wzrost=this.user.listaWymiarow[0].wzrost/100;
      this.waga = this.user.listaWymiarow[0].waga;
    this.bmi = this.waga / (this.wzrost * this.wzrost);
    
    this.bmi_bool = true;
      if (this.bmi < 16) {
        this.bmi_nazwa = "Wygłodzenie"
      } else if (this.bmi >= 16 && this.bmi <= 16.99) {
        this.bmi_nazwa = "Wychudzenie"
      } else if (this.bmi >= 17 && this.bmi <= 18.49) {
        this.bmi_nazwa = "Niedowaga"
      }
      else if (this.bmi >= 18.5 && this.bmi <= 24.99) {
        this.bmi_nazwa = "Wartość prawidłowa"

      } else if (this.bmi >= 25 && this.bmi <= 29.99) {
        this.bmi_nazwa = "Nadwaga"
      } else if (this.bmi >= 30 && this.bmi <= 34.99) {
        this.bmi_nazwa = "I stopień otyłości"
      } else if (this.bmi >= 35 && this.bmi <= 39.99) { 
        this.bmi_nazwa = "II stopień otyłości"
      } else if (this.bmi >= 40) { 
        this.bmi_nazwa = "Otyłość skrajna"
      }
      
    }
}
