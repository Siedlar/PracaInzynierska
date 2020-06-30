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
import { ZarejestrujComponent } from './zarejestruj/zarejestruj.component';
import { NiepamietaszhaslaComponent } from './niepamietaszhasla/niepamietaszhasla.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { KlatkaComponent } from './dashboard/cwiczenia/klatka/klatka.component';
import { BarkiComponent } from './dashboard/cwiczenia/barki/barki.component';
import { PlecyComponent } from './dashboard/cwiczenia/plecy/plecy.component';
import { BrzuchComponent } from './dashboard/cwiczenia/brzuch/brzuch.component';
import { NogiComponent } from './dashboard/cwiczenia/nogi/nogi.component';
import { BicepsComponent } from './dashboard/cwiczenia/biceps/biceps.component';
import { TricepsComponent } from './dashboard/cwiczenia/triceps/triceps.component';
import { KontoComponent } from './dashboard/konto/konto.component';
import { UserServiceService } from './service/user-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PomiaryComponent } from './dashboard/pomiary/pomiary.component';
import { DodajpomiarComponent } from './dashboard/dodajpomiar/dodajpomiar.component';
import { AuthGuardService } from './service/auth-guard.service';
import { HistoriatreningowComponent } from './dashboard/historiatreningow/historiatreningow.component';
import { BmiComponent } from './dashboard/bmi/bmi.component';
import { DodajTreningComponent } from './dashboard/dodaj-trening/dodaj-trening.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  { path: '', component: WelcomepageComponent
 },

  { path: 'login', component: LoginComponent },
  
  { path: 'zarejestruj', component: ZarejestrujComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuardService]},

  { path: 'niepamietaszhasla', component: NiepamietaszhaslaComponent },
  { path: '**', redirectTo: '' }
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
    ZarejestrujComponent,
    NiepamietaszhaslaComponent,
    DashboardComponent,
    LoginComponent,
    KlatkaComponent,
    BarkiComponent,
    PlecyComponent,
    BrzuchComponent,
    NogiComponent,
    BicepsComponent,
    TricepsComponent,
    KontoComponent,
    PomiaryComponent,
    DodajpomiarComponent,
    HistoriatreningowComponent,
    BmiComponent,
    DodajTreningComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
 
  providers: [UserServiceService,AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
