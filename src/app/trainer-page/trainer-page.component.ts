import { Component } from "@angular/core";
import { HeaderComponent } from "../header-component/header/header.component";
import { CaughtPokemonComponent } from "../caught-pokemon-component/caught-pokemon/caught-pokemon.component";
import { UserService } from "../services/user.service";

@Component({
    selector: 'app-trainer-page',
    templateUrl: './trainer-page.component.html',
    styleUrls: ['./trainer-page.component.html']
})
export class TrainerPageComponent
{
    constructor(private userService : UserService) {}
    headerText = `${this.userService.user.username}'s Profile`;
}