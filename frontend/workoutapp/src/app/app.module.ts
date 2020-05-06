import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { NavigationbarComponent } from './welcomepage/navigationbar/navigationbar.component';
import { FooterComponent } from './welcomepage/footer/footer.component';
import { HeaderComponent } from './welcomepage/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    NavigationbarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
