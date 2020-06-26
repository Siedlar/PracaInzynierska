import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from 'src/app/klasy/user';
import { Wymiary } from 'src/app/klasy/wymiary';

@Component({
  selector: 'app-dodajpomiar',
  templateUrl: './dodajpomiar.component.html',
  styleUrls: ['./dodajpomiar.component.css']
})
export class DodajpomiarComponent implements OnInit {
  userForm: FormGroup;
  submitted: boolean = false;
  user: User;
  napis: string;
  lista =new Array<Wymiary>();
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) { }
  
  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      waga: ['', Validators.required],
      wzrost:['',Validators.required],
      klatka: [],
      biceps: [],
      triceps: [],
      lydka :[],
      udo: [],
      talia: [],
      brzuch: [],
      data:['', Validators.required]
    },  
      
    )}
  get f() { return this.userForm.controls; }
  dodajPomiar() { 
    this.user = new User();
    this.submitted=true;
    if (this.userForm.invalid) {
      return;
    }
    this.user.login = sessionStorage.getItem("current_user");
    this.lista.push(this.userForm.value); 
    this.user.listaWymiarow = this.lista;
   console.log(this.user)
    this.userService.dodajpomiar(this.user).subscribe(
      data => { 
        alert("Dodanie powiodło się");
      },
      error => { 
alert("Coś poszło nie tak")
      }
    );
  }
}
