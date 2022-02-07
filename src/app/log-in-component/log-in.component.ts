import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from "../models/pokemon.model"

import { HttpRequestService } from "../services/user-requests.service";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
export class LogInComponent
{
    //DI
    constructor(private httpRequestService : HttpRequestService, private router : Router, private userService : UserService) {}
    
    fetchUsername(form:NgForm)
    {
        this.httpRequestService.getTrainer(form.value.username, this.loggedIn);
    }

    isLoading() : boolean
    {
        return this.httpRequestService.loading;
    }
    //When the httprequestservice is done logging in, this is called as a callback
    loggedIn = (user : User)=>
    {
        this.userService.user = user;
        this.router.navigateByUrl('/pokemon');
    }
}