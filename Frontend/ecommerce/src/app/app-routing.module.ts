import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AccueilComponent } from './component/accueil/accueil.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {path:"",component:AccueilComponent},
  {path:"SignIn",component:SignInComponent},
  {path:"SignUp",component:SignUpComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
