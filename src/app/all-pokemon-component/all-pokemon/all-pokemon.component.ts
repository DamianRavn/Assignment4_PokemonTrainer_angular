import { Component } from '@angular/core';
import { Pokemon, PokemonData } from "../../models/pokemon.model";
import { PokemonRequestService } from "../../services/pokemon-requests.service";
import { PokemonService } from "../../services/pokemon.service";
import { UserService } from "../../services/user.service";

const pictureUrlBase =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` //id.png

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.css']
})
export class AllPokemonComponent
{

  
    get pokemons() : PokemonData[]
    {
        return this.pokemonService.pokemonList;
    }
    //DI
    constructor(private pokemonResquestService: PokemonRequestService, private pokemonService : PokemonService, private user : UserService) 
    {
        if (pokemonService.pokemonList.length == 0) 
        {
            pokemonResquestService.findAllPokemons(this.requestCallback.bind(this));
            
        }
    }

    isCaught(pokename : string) : boolean
    {
      return this.user.isCaught(pokename);
    }
    
    requestCallback(pokemons : Pokemon[])
    {
        const pokemonDataList : PokemonData[] = []
        for (let i = 0; i < pokemons.length; i++) 
        {
            const pokemon = pokemons[i];
            const imageUrl = pictureUrlBase + (i+1) + ".png";
            let pokemonData : PokemonData = {name:pokemon.name, image: imageUrl, deleted: false}
            pokemonDataList.push(pokemonData);
        }

        this.pokemonService.pokemonList = pokemonDataList;
    }

    getAllPokemons() : PokemonData[]
    {
        return this.pokemonService.pokemonList;
    }

    catchPokemon(pokemon : PokemonData)
    {
        this.user.catchPokemon(pokemon);
    }

    isLoading()
    {
        return this.pokemonResquestService.loading;
    }

}
