import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Pokemon, PokemonResponse } from "../models/pokemon.model";

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30/results"


@Injectable({
    providedIn: 'root'
})

export class PokemonRequestService{
  
    private _loading: boolean = false;

    get loading (): boolean {
        return this._loading
    }

    constructor(private http: HttpClient) { }

    findAllPokemons(callback : Function): void{
        this._loading = true;
        this.http.get<PokemonResponse>(URL)
        .pipe(
            map((response: PokemonResponse)=>{
                return response.results
            })
        )
        .subscribe({
            next:(pokemons: Pokemon[]) => 
            {
                callback(pokemons)
                this._loading = false;
            }
        });

    }
}