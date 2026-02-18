import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { RouterLink } from '@angular/router';
import { Separador } from '../../separador/separador';

@Component({
  selector: 'app-perfil-do-contato',
  imports: [
    Container,
    RouterLink,
    Separador,
  ],
  templateUrl: './perfil-do-contato.html',
  styleUrl: './perfil-do-contato.css',
})
export class PerfilDoContato {

}
