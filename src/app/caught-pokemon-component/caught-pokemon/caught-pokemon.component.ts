import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component
({
  selector: 'app-caught-pokemon',
  templateUrl: './caught-pokemon.component.html',
  styleUrls: ['./caught-pokemon.component.css']
})
export class CaughtPokemonComponent
{

  constructor(private user : UserService) { }

  

}
