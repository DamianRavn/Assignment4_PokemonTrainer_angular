import { Injectable } from '@angular/core';
import { PokemonData } from '../models/pokemon.model';

const POKEMON_KEY = "pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService 
{

  private _pokemonList : PokemonData[] = [];

  get pokemonList() : PokemonData[]
  {
    return this._pokemonList;
  }

  //Set pokemon also sets the sessionstorage
  set pokemonList(pokemonList : PokemonData[])
  {
    sessionStorage.setItem(POKEMON_KEY, JSON.stringify(pokemonList));
    this._pokemonList = pokemonList;
  }

  constructor() 
  {
    //Get the user from session if there, otherwise default user. Have to stringify defaultuser because parse expects a string
    const storePokemon = sessionStorage.getItem(POKEMON_KEY) || JSON.stringify([]);
    this._pokemonList = JSON.parse(storePokemon);
  }
}
