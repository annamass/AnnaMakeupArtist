import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FotografieComponent } from './fotografie/fotografie.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ServiziComponent } from './servizi/servizi.component';
import { GiorniComponent } from './giorni/giorni.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FotografieComponent,
    ContattiComponent,
    ServiziComponent,
    GiorniComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
