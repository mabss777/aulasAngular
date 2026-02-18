import { Routes } from '@angular/router';
import { FormularioContato } from './componentes/paginas/formulario-contato/formulario-contato';
import { ListaContato } from './componentes/paginas/lista-contato/lista-contato';
import { PerfilDoContato } from './componentes/paginas/perfil-do-contato/perfil-do-contato';
import { Login } from './componentes/paginas/login/login';

export const routes: Routes = [

  {
    path: 'formulario',
    component: FormularioContato
  },

  {
    path: 'lista-contatos',
    component: ListaContato
  },

  {
    path: 'perfil-do-contato',
    component: PerfilDoContato
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full'
  }




];
