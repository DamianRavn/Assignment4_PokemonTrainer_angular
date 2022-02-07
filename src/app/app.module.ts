import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PokemonCatalogueComponent } from './pokemon-catalogue-page/pokemon-catalogue-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { LogInComponent } from "./log-in-component/log-in.component";
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar-component/navbar.component';
import { HeaderComponent } from './header-component/header/header.component';
import { CaughtPokemonComponent } from './caught-pokemon-component/caught-pokemon/caught-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TrainerPageComponent,
    PokemonCatalogueComponent,
    LogInComponent,
    NavbarComponent,
    HeaderComponent,
    CaughtPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
