import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { RouterLink } from '@angular/router';
import { Separador } from '../../separador/separador';

@Component({
  selector: 'app-login',
  imports: [
    Container,
    RouterLink,
    Separador
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
