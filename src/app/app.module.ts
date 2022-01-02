import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './Components/prueba/prueba.component';
import { HeaderComponent } from './Components/header/header.component';
import { ServiciosComponent } from './Components/servicios/servicios.component';
import { IndexComponent } from './Components/index/index.component';
import { CotisarComponent } from './Components/cotisar/cotisar.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    HeaderComponent,
    ServiciosComponent,
    IndexComponent,
    CotisarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
