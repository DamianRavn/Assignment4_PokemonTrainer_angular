import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, map } from "rxjs";
import { Pokemon, PokemonResponse } from "../models/pokemon.model";

const URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30/results"

@Injectable({
    providedIn: 'root'
})

export class PokemonsService{
  

    private _pokemons: Pokemon[] = [] // might be pokemon items instead
    private _loading: boolean = false;

    get pokemons (): Pokemon[]{
        return this._pokemons
    }

    get loading (): boolean {
        return this._loading
    }

    constructor(private http: HttpClient) { }

    findAllPokemons(): void{
        this._loading = true;
        this.http.get<PokemonResponse>(URL)
        .pipe(
            map((response: PokemonResponse)=>{
                return response.results
            }),
            finalize(() =>{
                this._loading = false;
            })
        )
        .subscribe({
            next:(pokemons: Pokemon[]) => {
                this._pokemons = pokemons
                //this._pokemons[0].url  -find specific stuff 01:15 services
            }
        });

    }
}