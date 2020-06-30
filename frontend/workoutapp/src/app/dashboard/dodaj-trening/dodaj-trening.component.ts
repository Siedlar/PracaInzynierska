import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/klasy/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Plan } from 'src/app/klasy/plan';
import { Cwiczenia } from 'src/app/klasy/cwiczenia';
import { JednoCwiczenie } from 'src/app/klasy/jedno-cwiczenie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodaj-trening',
  templateUrl: './dodaj-trening.component.html',
  styleUrls: ['./dodaj-trening.component.css']
})
export class DodajTreningComponent implements OnInit {
  user: User = new User();
  userForm: FormGroup;
  submitted  :boolean= false;
  CwiczeniaForm: FormGroup;
  SeriaForm: FormGroup;
  lista: Array<Plan> = new Array();
  lista2: Array<Cwiczenia> = new Array();
  lista3: Array<JednoCwiczenie> = new Array();
  showData: boolean = true;
  showData2: boolean = true;
  licznik: number=0;
  
  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      czas_trwania: ['', Validators.required],
      data: ['', Validators.required],
    }),
      this.CwiczeniaForm = this.formBuilder.group({
        nazwacwiczenia: ['', Validators.required],
        czesc_ciala: ['', Validators.required],
      });
      this.SeriaForm= this.formBuilder.group({
        seria: ['', Validators.required],
        ciezar: ['', Validators.required],
        powtorzenia:['', Validators.required],
      })
      
    }
  dodajPomiar() { 
    this.submitted=true;
    if (this.userForm.invalid) {
      return;
  }
    this.lista.push(this.userForm.value)
    this.user.listaPlanow = this.lista;
    this.showData = false;
    console.log(this.user)
    this.submitted = false;
    this.user.login = sessionStorage.getItem('current_user');
  }
  dodajPomiar2() { 
    this.submitted=true;
    if (this.CwiczeniaForm.invalid) {
      return;
  }
    this.lista2.push(this.CwiczeniaForm.value)
    this.user.listaPlanow[0].listaCwiczen = this.lista2;
    console.log(this.user)
    this.showData2 = false;
    this.submitted=false;
  }
  dodajPomiar3() { 
    this.submitted=true;
    if (this.SeriaForm.invalid) {
      return;
  }
    this.lista3.push(this.SeriaForm.value)
    this.user.listaPlanow[0].listaCwiczen[this.licznik].listaCwiczen = this.lista3;
    console.log(this.user)
    var answer = window.confirm("Czy chcesz dodać kolejna serie?")
    if (answer == true) {
      this.SeriaForm.reset()
    }
    else {
      answer = confirm("Czy chcesz dodac kolejne cwiczenie")
      if (answer == true) {
        this.licznik++;
        this.lista3 = new Array();
        console.log("essa")
        this.showData2 = true;
        this.showData = false;
        this.CwiczeniaForm.reset();
        
      }
      else {
        var answer2 = confirm("Czy chcesz wyslac trening??")
        if (answer2) {
          this.userService.wyslijplan(this.user).subscribe(
            data => console.log(data)
        
          )
          window.location.reload();
        
        }
      } 
    }
    }
  

  get f() { return this.userForm.controls; }
  get d() { return this.SeriaForm.controls; }
  get c() { return this.CwiczeniaForm.controls; }
}
