import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../klasy/user';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zarejestruj',
  templateUrl: './zarejestruj.component.html',
  styleUrls: ['./zarejestruj.component.css']
})
export class ZarejestrujComponent implements OnInit {
  user:User;
  userForm: FormGroup;
  submitted  :boolean= false;
  constructor(private formBuilder: FormBuilder,private UserService:UserServiceService,     private router: Router,) { }

  ngOnInit(): void {
this.userForm=this.formBuilder.group({
  login:['',Validators.required],
  imie:['',Validators.required],
  nazwisko:['',Validators.required],
  password: ['', [Validators.required, Validators.minLength(6)]],
          },
            
)}
get f() { return this.userForm.controls; }
onSubmit(){
  this.submitted=true;
  if (this.userForm.invalid) {
    return;
}
this.user=this.userForm.value;
  this.UserService.register(this.user).subscribe(data=>{
    alert("Zostałeś pomyślne zarejestrowany w systemie, nastąpi przekierowanie do strony logowania!!!")
    this.router.navigate(['/login']);
  },error=>{
    alert("Uzytkownik posiada juz taki login w systemie, zmien login")
    this.userForm.reset();
    this.submitted=false;
  })
}
}
