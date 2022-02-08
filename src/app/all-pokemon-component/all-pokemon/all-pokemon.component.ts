import { Component } from '@angular/core';
import { Pokemon, PokemonData } from "../../models/pokemon.model";
import { PokemonRequestService } from "../../services/pokemon-requests.service";
import { PokemonService } from "../../services/pokemon.service";
import { UserService } from "../../services/user.service";

const pictureUrlBase =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` //id.png
const offsetAmount = 20;

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.css']
})
export class AllPokemonComponent
{
  currentPage = 0;

  get pokemons() : PokemonData[]
  {
    return this.pokemonService.pokemonList;
  }
  //DI
  constructor(private pokemonResquestService: PokemonRequestService, private pokemonService : PokemonService, private user : UserService) 
  {
    if (pokemonService.pokemonList.length == 0) 
    {
      pokemonResquestService.loadNextPage(this.currentPage, offsetAmount, this.requestCallback.bind(this));
        
    }
  }

  
  
  requestCallback(pokemons : Pokemon[])
  {
    const pokemonDataList : PokemonData[] = []
    for (let i = 0; i < pokemons.length; i++) 
    {
        const pokemon = pokemons[i];
        const id = this.exstractIdFromURL(pokemon.url);
        const imageUrl = pictureUrlBase + id + ".png";
        let pokemonData : PokemonData = {name:pokemon.name, image: imageUrl, deleted: false}
        pokemonDataList.push(pokemonData);
    }

    this.pokemonService.pokemonList = [...this.pokemonService.pokemonList, ...pokemonDataList];
  }
  exstractIdFromURL(url : string) : number
  {
    //split the url by / and then filter out empty strings
    const splitURL = url.split('/').filter(x=>x);
    return parseInt(splitURL[splitURL.length-1]);
  }

  catchPokemon(pokemon : PokemonData)
  {
    this.user.catchPokemon(pokemon);
  }
  //We need more pokemon
  loadMorePokemon()
  {
    this.currentPage++;
    this.pokemonResquestService.loadNextPage(this.currentPage, offsetAmount, this.requestCallback.bind(this));
  }

  //The api is loading
  isLoading()
  {
      return this.pokemonResquestService.loading;
  }
  //The pokemon has already been caught
  isCaught(pokename : string) : boolean
  {
    return this.user.isCaught(pokename);
  }

}
