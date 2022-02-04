import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

type User =
{
    id : number;
    name : string;
    pokemon : string[];
}

@Injectable({providedIn: 'root'})
export class PokemonService {
    constructor(private httpClient: HttpClient) { }
    
    apiURL : string = "https://assignment4-angular.herokuapp.com";
    apiKey : string = 'your-public-api-key-goes-here';

    public user : User | null = null;
    getTrainer(username : string) : void
    {
        this.httpClient.get<User>(`${this.apiURL}/trainers?username=${username}`)
        .subscribe
        ({
            next: (response : User)=>
            {
                console.log("Response!",response);
                this.user = response;
            },
            error: (error : HttpErrorResponse)=>
            {
                console.log(error);
            }
        });
    }
    
    
}