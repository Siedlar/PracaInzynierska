import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../klasy/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User;
  constructor(private userService: UserServiceService) { }
  ngOnInit(): void {

  }

  wyloguj(){
    console.log("wylogowywanie");
  }
  showKonto:boolean=true;
username="Krystian Siedlarski"
showKlatka: boolean = false;
showNogi: boolean = false;
showBarki: boolean = false;
showPlecy: boolean = false;
showBiceps: boolean = false;
showTriceps: boolean = false;
showBrzuch: boolean = false;

zmienboolean(){
  this.showKonto=false;
  
  this.showKlatka = false;
  this.showNogi= false;
  this.showBarki= false;
  this.showPlecy= false;
  this.showBiceps= false;
  this.showTriceps = false;
  this.showBrzuch = false;
}
zmienKonto(){
this.zmienboolean();
this.showKonto=true;
}
zmienKlatka(){
  this.zmienboolean();
  this.showKlatka=true;

}
zmienNogi(){
  this.zmienboolean();
  this.showNogi=true;

}
zmienBarki(){
  this.zmienboolean();
  this.showBarki=true;


}
zmienPlecy(){
  this.zmienboolean();
  this.showPlecy=true;
}
zmienBiceps(){
  this.zmienboolean();
  this.showBiceps=true;
 
 
}
zmienTriceps(){
  this.zmienboolean();
  this.showTriceps=true;

}
zmienBrzuch(){
  this.zmienboolean();
  this.showBrzuch=true;
 
  
}
}
