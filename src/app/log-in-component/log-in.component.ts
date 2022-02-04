import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PokemonService } from "../requests/http-requests";

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
export class LogInComponent
{
    //DI
    constructor(private pokemonService : PokemonService) {}
    fetchUsername(form:NgForm)
    {
        this.pokemonService.getTrainer(form.value.username);
    }
}