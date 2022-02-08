import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from  '@angular/common/http';
import { Pokemon, PokemonData } from "../models/pokemon.model";
import { PokemonRequestService } from "../services/pokemon-requests.service";
import { HeaderComponent } from "../header-component/header/header.component";
import { PokemonService } from "../services/pokemon.service";
import { UserService } from "../services/user.service";

const pictureUrlBase =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` //id.png

@Component({
    selector: 'app-pokemon-catalogue-page',
    templateUrl: './pokemon-catalogue-page.component.html',
    styleUrls: ['./pokemon-catalogue-page.component.html'],
})


export class PokemonCatalogueComponent 
{

    headerText = "Pokemon Catalogue";
    get pokemons() : PokemonData[]{
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
    
}

// export class PokemonCatalogueComponent implements OnInit{

//     public pokemon: Pokemon | null = null;

//     constructor(private http: HttpClient){ 
//     }
    
    
//     ngOnInit() {
//         this.http.get<Pokemon>( URL )    
//             .subscribe({
//                 next: (response)=>{
//                     this.pokemon = response;
//                     //console.log("RESPONSE", response);
//                     console.log(this.pokemon.results)
//                 },
//                 error: (error) => {
//                     console.log(error.message)
//                 }
//             })
//             console.log(pictureUrl)
//     }
// }

// Notes for WIP
// maybe the API fetch should be noved to its own folder as a component? (interface to th api)