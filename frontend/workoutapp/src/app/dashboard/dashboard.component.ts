import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../klasy/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User;
 
  
  constructor(private userService: UserServiceService,private router :Router) { }
  ngOnInit(): void {
    this.username=sessionStorage.getItem("imie_nazwisko")
  }

  wyloguj(){
   alert("Zostajesz wylogowany ")
    sessionStorage.clear()
    this.router.navigate(['/']);
  }
  username:string;
  showKonto:boolean=true;
showKlatka: boolean = false;
showNogi: boolean = false;
showBarki: boolean = false;
showPlecy: boolean = false;
showBiceps: boolean = false;
showTriceps: boolean = false;
showBrzuch: boolean = false;
showPomiar:boolean=false;
showHistoria:boolean=false;
showDodajPomiar: boolean=false;
  showBMI: boolean = false;
  showDodajTrening: boolean = false;
zmienboolean(){
  this.showKonto=false;
  
  this.showKlatka = false;
  this.showNogi= false;
  this.showBarki= false;
  this.showPlecy= false;
  this.showBiceps= false;
  this.showTriceps = false;
  this.showPomiar=false;
  this.showBrzuch = false;
  this.showHistoria=false;
  this.showDodajPomiar=false;
  this.showBMI = false;
  this.showDodajTrening = false;
}
zmienKonto(){
this.zmienboolean();
this.showKonto=true;
}
zmienPomiar(){
  this.zmienboolean();
this.showPomiar=true;
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
zmienHistoria(){
  this.zmienboolean();
  this.showHistoria=true;
 
  
}
zmienDodajPomiar(){
  this.zmienboolean();
  this.showDodajPomiar=true;
 
  
}
zmienBMI(){
  this.zmienboolean();
  this.showBMI=true;
 
  
}
  zmienDodajTrening() { 
    this.zmienboolean();
    this.showDodajTrening=true;
  }
}
