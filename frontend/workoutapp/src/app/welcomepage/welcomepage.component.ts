import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
  }
  show:boolean=false;
toTop(){
  document.getElementById("about").scrollIntoView();
}
scrollEvent = (event: any): void => {
  
  this. show=true;
 console.log("essa")

}

}
