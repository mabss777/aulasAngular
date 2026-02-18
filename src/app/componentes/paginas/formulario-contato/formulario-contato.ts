import { Component } from '@angular/core';
import { Container } from '../../container/container';
import { Separador } from '../../separador/separador';
import { ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    Container,
    Separador,
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato {
  contatoForm!: FormGroup;

  constructor(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birth: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  salvarContato(){
      console.log(this.contatoForm.value)
  }

  cancelar(){
    console.log("Submissão cancelada")
  }
}
