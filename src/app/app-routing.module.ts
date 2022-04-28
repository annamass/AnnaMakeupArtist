import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './contatti/contatti.component';
import { FotografieComponent } from './fotografie/fotografie.component';
import { GiorniComponent } from './giorni/giorni.component';
import { HomeComponent } from './home/home.component';
import { ServiziComponent } from './servizi/servizi.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent
},

{
  path : 'fotografie',
  component : FotografieComponent
},

{
  path : 'contatti',
  component : ContattiComponent
},

{
  path : 'servizi',
  component : ServiziComponent
},
{
  path : 'giorni',
  component : GiorniComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
