import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemon.model';
import { HttpRequestService } from 'src/app/services/user-requests.service';
import { UserService } from 'src/app/services/user.service';

@Component
({
  selector: 'app-caught-pokemon',
  templateUrl: './caught-pokemon.component.html',
  styleUrls: ['./caught-pokemon.component.css']
})
export class CaughtPokemonComponent
{

  constructor(private userService : UserService, private httpRequest : HttpRequestService) { }

  currentPokemon() : PokemonData[]
  {
    return this.userService.filteredPokemonList();
  }
  deletePokemon(pokename : string)
  {
    this.userService.deletePokemon(pokename);
    this.httpRequest.patchPokemon(this.userService.user.id, this.userService.user.pokemon);
  }

}
