import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from "../models/pokemon.model"

import { UserRequestService } from "../services/user-requests.service";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
export class LogInComponent
{
    //DI
    constructor(private userRequestService : UserRequestService, private router : Router, private userService : UserService) {}
    
    fetchUsername(form:NgForm)
    {
        this.userRequestService.getTrainer(form.value.username, this.loggedIn);
    }

    isLoading() : boolean
    {
        return this.userRequestService.loading;
    }
    //When the httprequestservice is done logging in, this is called as a callback
    loggedIn = (user : User)=>
    {
        this.router.navigateByUrl('/pokemon');
    }
}