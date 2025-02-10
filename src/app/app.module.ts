import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FraseComponent } from './frase/frase.component';
import { FooterComponent } from './footer/footer.component';
import { Aptitudes2Component } from './aptitudes2/aptitudes2.component';

//Rutas
import { app_routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutmeComponent,
    AptitudesComponent,
    ContactoComponent,
    FraseComponent,
    FooterComponent,
    Aptitudes2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
