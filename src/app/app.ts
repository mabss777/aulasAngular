import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioContato } from './componentes/paginas/formulario-contato/formulario-contato';
import { ListaContato } from './componentes/paginas/lista-contato/lista-contato';
import { PerfilDoContato } from './componentes/paginas/perfil-do-contato/perfil-do-contato';
import { Login } from './componentes/paginas/login/login';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    FormularioContato,
    ListaContato,
    PerfilDoContato,
    Login
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
