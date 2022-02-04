import { Component, OnInit } from "@angular/core";
import { HttpClient } from  '@angular/common/http';
import { Pokemon } from "../models/pokemon.model";

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30/results"

@Component({
    selector: 'app-pokemon-catalogue-page',
    templateUrl: './pokemon-catalogue-page.component.html',
    styleUrls: ['./pokemon-catalogue-page.component.html'],
})


export class PokemonCatalogueComponent implements OnInit{

    public pokemon: Pokemon | null = null;

    constructor(private http: HttpClient){ 
    }
    
    
    ngOnInit() {
        this.http.get<Pokemon>( URL )    
            .subscribe({
                next: (response)=>{
                    this.pokemon = response;
                    //console.log("RESPONSE", response);
                    //console.log(this.pokemon.results)
                },
                error: (error) => {
                    console.log(error.message)
                }
            })
    }
}

// Notes for WIP
// maybe the API fetch should be noved to its own folder as a component? (interface to th api)