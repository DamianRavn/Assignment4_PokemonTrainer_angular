import { Injectable } from '@angular/core';
import { User, defaultUser, PokemonData } from "../models/pokemon.model"


const USER_KEY = "user";

@Injectable
({
  providedIn: 'root'
})

export class UserService 
{
  private _user : User;

  get user() : User
  {
    return this._user;
  }
  //Set user also sets the sessionstorage
  set user(user : User)
  {
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this._user = user;
  }
  constructor() 
  { 
    //Get the user from session if there, otherwise default user. Have to stringify defaultuser because parse expects a string
    const storeUser = sessionStorage.getItem(USER_KEY) || JSON.stringify(defaultUser);
    this._user = JSON.parse(storeUser);
  }
  //If user is default, then not logged in
  isLoggedIn() : boolean
  {
    //If username is anything but "", user is logged in
    return this._user.username != "";
  }
  //Returns pokemon that are not deleted
  filteredPokemonList() : PokemonData[]
  {
    return this._user.pokemon.filter(pokemon => !pokemon.deleted);
  }

  //Deletes the pokemon from the user by setting a tombstone
  deletePokemon(pokename : string)
  {
    //Set flag by going through all pokemon untill finds the one to delete
    this._user.pokemon.forEach(pokemon => 
    {
        if (pokemon.name === pokename) 
        {
          pokemon.deleted = true;
        }
    });
  }
}
