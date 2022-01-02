import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from "./Components/prueba/prueba.component";
import { ServiciosComponent } from "./Components/servicios/servicios.component";
import { IndexComponent } from "./Components/index/index.component";
import { CotisarComponent } from "./Components/cotisar/cotisar.component";
const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'Cotizar', component:CotisarComponent},
  {path:'Servicio',component:ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
