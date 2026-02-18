import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import agenda from '../../../agenda.json';
import { FormularioContato } from '../formulario-contato/formulario-contato';
import { Contato } from '../../contato/contato';
import { Separador } from '../../separador/separador';
import { Cabecalho } from '../../cabecalho/cabecalho';
import { Container } from '../../container/container';

interface IContato{
  id: number
  nome: string
  telefone: string
}


@Component({
  selector: 'app-lista-contato',
  imports: [
    RouterOutlet,
    Container,
    Cabecalho,
    Separador,
    Contato,
    FormsModule,
    FormularioContato,
    RouterLink
  ],
  templateUrl: './lista-contato.html',
  styleUrl: './lista-contato.css',
})

export class ListaContato {
  alfabeto: string = "abcdefghijklmnopqrstuvwxyz";

  contatos: IContato[] = agenda;

  filtroPorTexto: string = '';

  private normalizarTexto(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}


  filtrarContatosPorLetraInicial(letra: string): IContato[] {
  return this.filtrarContatosPorTexto().filter(contato =>
    this.normalizarTexto(contato.nome)
      .startsWith(this.normalizarTexto(letra))
  );
}


  filtrarContatosPorTexto(): IContato[] {

  if (!this.filtroPorTexto) {
    return this.contatos;
  }

  return this.contatos.filter(contato => {
    return this.normalizarTexto(contato.nome)
      .includes(this.normalizarTexto(this.filtroPorTexto));
  });
}


}
