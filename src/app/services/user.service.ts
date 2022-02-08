import { Injectable } from '@angular/core';
import { User, defaultUser, PokemonData } from "../models/pokemon.model"
import { UserRequestService } from './user-requests.service';


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
  constructor(private userRequest : UserRequestService) 
  { 
    //Get the user from session if there, otherwise default user. Have to stringify defaultuser because parse expects a string
    const storeUser = sessionStorage.getItem(USER_KEY) || JSON.stringify(defaultUser);
    this._user = JSON.parse(storeUser);
  }
  //The user has added a pokemon from the catalogue
  catchPokemon(pokemon : PokemonData)
  {
    //make a new list with the pokemon added and send it to request. The callback will take care of the rest
    const newList = [...this.user.pokemon, pokemon];
    this.userRequest.patchPokemon(this.user.id, newList);
  }

  //If user is default, then not logged in
  isLoggedIn() : boolean
  {
    //If username is anything but "", user is logged in
    return this.user.username != "";
  }
  //Returns pokemon that are not deleted
  filteredPokemonList() : PokemonData[]
  {
    return this.user.pokemon.filter(pokemon => !pokemon.deleted);
  }

  //Deletes the pokemon from the user by setting a tombstone
  deletePokemon(pokename : string)
  {
    //Set flag by going through all pokemon untill finds the one to delete
    this.user.pokemon.forEach(pokemon => 
    {
        if (pokemon.name === pokename) 
        {
          pokemon.deleted = true;
        }
    });

    this.userRequest.patchPokemon(this.user.id, this.user.pokemon);
  }
}
