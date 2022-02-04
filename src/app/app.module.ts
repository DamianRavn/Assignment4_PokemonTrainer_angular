import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PokemonCatalogueComponent } from './pokemon-catalogue-page/pokemon-catalogue-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { LogInComponent } from "./log-in-component/log-in.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TrainerPageComponent,
    PokemonCatalogueComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
