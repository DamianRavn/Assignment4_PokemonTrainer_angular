import { Component } from "@angular/core";
import { HeaderComponent } from "../header-component/header/header.component";
import { CaughtPokemonComponent } from "../caught-pokemon-component/caught-pokemon/caught-pokemon.component";

@Component({
    selector: 'app-trainer-page',
    templateUrl: './trainer-page.component.html',
    styleUrls: ['./trainer-page.component.html']
})
export class TrainerPageComponent
{
    headerText = "Profile";
}