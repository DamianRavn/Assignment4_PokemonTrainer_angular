import { Component } from "@angular/core";
import { HeaderComponent } from "../header-component/header/header.component";

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent
{
    headerText = "Welcome Trainer";
}