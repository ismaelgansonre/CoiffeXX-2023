import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { HeaderComponent } from './header/header.component';
import { Enfant1Component } from './enfant1/enfant1.component';

@NgModule({
  declarations: [
    AppComponent,
    CarousselComponent,
    HeaderComponent,
    Enfant1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
