import { Component } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemon.model';
import { UserService } from 'src/app/services/user.service';

@Component
({
  selector: 'app-caught-pokemon',
  templateUrl: './caught-pokemon.component.html',
  styleUrls: ['./caught-pokemon.component.css']
})
export class CaughtPokemonComponent
{

  constructor(private userService : UserService) { }

  currentPokemon() : PokemonData[]
  {
    return this.userService.filteredPokemonList();
  }
  deletePokemon(pokename : string)
  {
    this.userService.deletePokemon(pokename);
  }

}
