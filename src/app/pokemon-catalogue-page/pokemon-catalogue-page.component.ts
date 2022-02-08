import { Component, Input } from "@angular/core";
import { HeaderComponent } from "../header-component/header/header.component";

@Component
({
    selector: 'app-pokemon-catalogue-page',
    templateUrl: './pokemon-catalogue-page.component.html',
    styleUrls: ['./pokemon-catalogue-page.component.html'],
})


export class PokemonCatalogueComponent 
{
    headerText = "Pokemon Catalogue";
}

