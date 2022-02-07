import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from  '@angular/common/http';
import { Pokemon } from "../models/pokemon.model";
import { PokemonsService } from "../services/pokemons.service";

let pictureVal = 1 // use string split on 6th '/' at  URL from the json file: https://pokeapi.co/api/v2/pokemon/1/"

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30/results"
const pictureUrl =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pictureVal}.png`

@Component({
    selector: 'app-pokemon-catalogue-page',
    templateUrl: './pokemon-catalogue-page.component.html',
    styleUrls: ['./pokemon-catalogue-page.component.html'],
})


export class PokemonCatalogueComponent implements OnInit {


    get pokemons() : Pokemon[]{
        return this.pokemonService.pokemons;
    }
    //DI
    constructor(private pokemonService: PokemonsService) {}

    ngOnInit(): void {
        this.pokemonService.findAllPokemons();
        console.log( this.pokemons[2])
        
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