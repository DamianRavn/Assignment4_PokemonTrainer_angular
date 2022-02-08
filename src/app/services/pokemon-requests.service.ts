import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Pokemon, PokemonResponse } from "../models/pokemon.model";

const BaseURL = "https://pokeapi.co/api/v2/pokemon/";


@Injectable({
    providedIn: 'root'
})

export class PokemonRequestService{
  
    private _loading: boolean = false;

    get loading (): boolean {
        return this._loading
    }

    constructor(private http: HttpClient) { }

    loadNextPage(currentPage : number, offsetAmount : number, callback : Function) : void
    {
        this._loading = true;
        this.http.get<PokemonResponse>(`${BaseURL}?limit=${offsetAmount}&offset=${currentPage * offsetAmount}/results`)
        .pipe(
            map((response: PokemonResponse)=>
            {
                return response.results
            })
        )
        .subscribe
        ({
            next:(pokemons: Pokemon[]) => 
            {
                callback(pokemons)
                this._loading = false;
            }
        });
    }
}