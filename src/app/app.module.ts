import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


library.add(faMusic);


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewlandComponent } from './newland/newland.component';
import { Portfolio1Component } from './portfolio1/portfolio1.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NewlandComponent,
    Portfolio1Component
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
