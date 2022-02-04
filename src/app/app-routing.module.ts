import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TrainerPageComponent } from './trainer-page/trainer-page.component';
import { PokemonCatalogueComponent } from './pokemon-catalogue-page/pokemon-catalogue-page.component';
import { NotFoundComponent } from './not-found-page/not-found.component';

const routes: Routes = 
[
  { 
    path: '',
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  { 
    path: 'home',
    component: LandingPageComponent 
  },
  { 
    path: 'trainer',
    component: TrainerPageComponent 
  },
  { 
    path: 'pokemon',
    component: PokemonCatalogueComponent 
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**', 
    redirectTo: '/404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
