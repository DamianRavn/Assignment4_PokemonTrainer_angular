import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from "../models/pokemon.model"
import { map } from "rxjs/operators";

const apiURL =  'https://experis-assignment-api.herokuapp.com'
const apiKey =  'floppy-vitamin-cloud';

@Injectable({providedIn: 'root'})
export class HttpRequestService {
    constructor(private httpClient: HttpClient) { }
    //Indicates whether the service is currently getting data from server
    private _loading : boolean = false;
    get loading() : boolean
    {
        return this._loading;
    }

    getTrainer(username : string, callback : Function) : void
    {
        this._loading = true;
        this.httpClient.get<User[]>(`${apiURL}/trainers?username=${username}`)
        .pipe(map((response : User[]) => response[0])) //There should only be one user with that username, so we can use [0]. if there are 0 users, it's undefined which is fine
        .subscribe
        ({
            next: (response : User)=>
            {
                if (!response) 
                {
                    //The user is not in the api, so we register as new user
                    this.registerTrainer(username, callback);
                }
                else
                {
                    //The user exists and everything is good
                    this._loading = false;
                    callback(response);
                }
            },
            error: (error : HttpErrorResponse)=>
            {
                console.log(error);
            },
        });
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
    //Register the user on API
    registerTrainer(username : string, callback : Function) : void
    {
        const user = 
        {
            username,
            pokemon: []
        }
        const headers = this.createHeaders();
        this.httpClient.post<User>(`${apiURL}/trainers`, user, {headers})
        .subscribe
        ({
            next: (response : User) =>
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