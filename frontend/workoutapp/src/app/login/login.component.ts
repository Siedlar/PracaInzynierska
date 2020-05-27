import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 username:String;
 password:String;
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
rejestracja(){
  this.router.navigateByUrl('/zarejestruj');
}
niepamietaszhasla(){
  this.router.navigateByUrl('/niepamietaszhasla');
}
doLogin(){
  console.log(this.username , this.password);
  this.router.navigate(['/dashboard'])
}
}
