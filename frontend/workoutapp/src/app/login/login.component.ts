import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { User } from '../klasy/user';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:User;
 submitted  :boolean= false;
  userForm: FormGroup;
 ;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService,     private router: Router,) { }

  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      login:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
              },           
    )}
rejestracja(){
  this.router.navigateByUrl('/zarejestruj');
}
get f() { return this.userForm.controls; }
doLogin(){
  this.submitted=true;
  if (this.userForm.invalid) {
    return;
}
this.user=this.userForm.value;
this.userService.login(this.user).subscribe
  (data=>{
    this.user=data;
    sessionStorage.setItem("current_user", this.user.login)
    sessionStorage.setItem("current_user_id",this.user.uzytkownik_id.toString())
    sessionStorage.setItem("imie_nazwisko",this.user.imie+" " +this.user.nazwisko)
    alert("Zostałeś pomyślne zalogowany  w systemie, nastąpi przekierowanie do menu!!");
    this.router.navigate(['/dashboard']);
  },error=>{
    alert("Nie udalo sie zalogować, sproboj ponownie")
    this.userForm.reset();
    this.submitted=false;
  })

  //this.router.navigate(['/dashboard'])
}
}
