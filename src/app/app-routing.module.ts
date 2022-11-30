import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventCalendarComponent } from './page/advent-calendar/advent-calendar.component';
import { LoginComponent } from './page/login/login.component';
import { RegistrazioneComponent } from './page/registrazione/registrazione.component';
import { WelcomeUserComponent } from './page/welcome-user/welcome-user.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"advent-calendar",
    pathMatch:"full"
  },
  {
    path:"register",
    component:RegistrazioneComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: "advent-calendar",
    component: AdventCalendarComponent
  },
  {
    path: "welcome-user",
    component: WelcomeUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
