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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
