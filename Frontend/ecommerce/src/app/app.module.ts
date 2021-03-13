import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './component/template/header/header.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { MenuComponent } from './component/template/menu/menu.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { StatComponent } from './component/dashboard/stat/stat.component';
import { DeliveryManComponent } from './component/dashboard/delivery-man/delivery-man.component';
import { StockComponent } from './component/dashboard/stock/stock.component';
import { CategoryComponent } from './component/dashboard/category/category.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardMenuComponent } from './component/dashboard/dashboard-menu/dashboard-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    StatComponent,
    DeliveryManComponent,
    StockComponent,
    CategoryComponent,
    DashboardMenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
