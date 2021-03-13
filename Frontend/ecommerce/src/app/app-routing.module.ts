import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AccueilComponent } from './component/accueil/accueil.component';
import { CategoryComponent } from './component/dashboard/category/category.component';
import { DeliveryManComponent } from './component/dashboard/delivery-man/delivery-man.component';
import { StatComponent } from './component/dashboard/stat/stat.component';
import { StockComponent } from './component/dashboard/stock/stock.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {path:"",component:AccueilComponent},
  {path:"SignIn",component:SignInComponent},
  {path:"SignUp",component:SignUpComponent},
  {path:"Dashboard/DeliveryMan",component:DeliveryManComponent},
  {path:"Dashboard/Stat",component:StatComponent},
  {path:"Dashboard/Stock",component:StockComponent},
  {path:"Dashboard/Category",component:CategoryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
