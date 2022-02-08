import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PokemonData, User } from "../models/pokemon.model"
import { map, mergeMap } from "rxjs/operators";
import { of } from 'rxjs';

const apiURL =  'https://experis-assignment-api.herokuapp.com'
const apiKey =  'floppy-vitamin-cloud';

@Injectable({providedIn: 'root'})
export class UserRequestService {
    constructor(private httpClient: HttpClient) { }

    //Indicates whether the service is currently getting data from server
    private _loading : boolean = false;
    get loading() : boolean
    {
        return this._loading;
    }

    //Helper function to get the headers for POST request
    private createHeaders() : HttpHeaders
    {
        return new HttpHeaders
        ({
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        });
    }

    getTrainer(username : string, callback : Function) : void
    {
        this._loading = true;
        this.httpClient.get<User[]>(`${apiURL}/trainers?username=${username}`)
        .pipe
        (
            map((response : User[]) => response[0]), //There should only be one user with that username, so we can use [0]. if there are 0 users, it's undefined which is fine
            //Mergemap is used to flattens the callbacks, so we don't have to check all of this in the subscribe just to call a whole new request.
            mergeMap
            (
                (user : User)=>
                {
                    if (!user) 
                    {
                        //Register the user on API since it's not there
                        const newUser =
                        {
                            username,
                            pokemon: []
                        }
                        const headers = this.createHeaders();
                        return this.httpClient.post<User>(`${apiURL}/trainers`, newUser, {headers})
                    }
                    //'of' just makes it into and observable
                    return of(user);
                }
            )
        ) 
        .subscribe
        ({
            next: (response : User)=>
            {
                this._loading = false;
                //The callback takes care of the rest
                callback(response);
            },
            error: (error : HttpErrorResponse)=>
            {
                console.log(error);
            },
        });
    }

    //A pokemon has been deleted, update the api
    patchPokemon(userId : number, newList : PokemonData[], callback : Function)
    {
        this._loading = true;
        const headers = this.createHeaders();
        this.httpClient.patch<User>(`${apiURL}/trainers/${userId}`,{ pokemon:newList}, {headers})
        .subscribe
        ({
            next: (response : User)=>
            {
                this._loading = false;
                callback(response);
            },
            error: (error : HttpErrorResponse)=>
            {
                console.log(error);
            },
        });
    }
}