import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component
({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent 
{

  constructor(private user : UserService) { }

  //user is private so have to wrap it to use in html
  isLoggedIn() : boolean
  {
    return this.user.isLoggedIn();
  }

}
