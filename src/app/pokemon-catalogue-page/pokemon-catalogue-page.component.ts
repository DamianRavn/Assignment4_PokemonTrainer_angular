import { Component, OnInit } from "@angular/core";
import { HttpClient } from  '@angular/common/http';
import { Pokemon } from "../models/pokemon.model";

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100"

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
                    console.log("RESPONSE", response);
                    this.pokemon = response;
                    //console.log(this.pokemon.name)// cant seem to get the names printed on the dom - see the html file also
                    console.log(this.pokemon)
                },
                error: (error) => {
                    console.log(error.message)
                }
            })
    }

}

// Notes for WIP
// maybe the API fetch should be noved to its own folder as a component? (interface to th api)