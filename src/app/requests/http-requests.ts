import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from "../models/pokemon.model"

const apiURL =  'https://experis-assignment-api.herokuapp.com'
const apiKey =  'floppy-vitamin-cloud';

@Injectable({providedIn: 'root'})
export class PokemonService {
    constructor(private httpClient: HttpClient) { }

    private _loading : boolean = false;
    get loading() : boolean
    {
        return this._loading;
    }
    //User data
    defaultUser : User =
    {
        id: 0,
        name: "default",
        pokemon: []
    }
    private _trainer : User = this.defaultUser;
    //Getter is read only
    get trainer() : User
    {
        return this._trainer;
    }
    getTrainer(username : string) : void
    {
        this._loading = true;
        this.httpClient.get<User>(`${apiURL}/trainers?username=${username}`)
        .subscribe
        ({
            next: (response : User)=>
            {
                console.log("Response!",response);
                this._trainer = response;
            },
            error: (error : HttpErrorResponse)=>
            {
                console.log(error);
            },
            complete: ()=>
            {
                this._loading = false;
            }
        });
    }
    
    
}