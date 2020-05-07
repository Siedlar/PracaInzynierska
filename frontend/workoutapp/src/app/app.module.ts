import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { NavigationbarComponent } from './welcomepage/navigationbar/navigationbar.component';
import { FooterComponent } from './welcomepage/footer/footer.component';
import { HeaderComponent } from './welcomepage/header/header.component';
import { JakdzialaComponent } from './welcomepage/jakdziala/jakdziala.component';
import { OpinieComponent } from './welcomepage/opinie/opinie.component';
import { DzialaniaaplikacjiComponent } from './welcomepage/dzialaniaaplikacji/dzialaniaaplikacji.component';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: WelcomepageComponent },
  { path: 'login', component: LoginComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    NavigationbarComponent,
    FooterComponent,
    HeaderComponent,
    JakdzialaComponent,
    OpinieComponent,
    DzialaniaaplikacjiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
