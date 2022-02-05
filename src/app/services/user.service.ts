import { Injectable } from '@angular/core';
import { User, defaultUser } from "../models/pokemon.model"


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
    return this._user.name != "";
  }
}
