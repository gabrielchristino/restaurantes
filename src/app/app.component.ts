import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'restaurantes';

  form = new FormGroup({
    restaurante: new FormControl(),
  });

  public rodando = false;

  listaRestaurantes: Array<string> = [
    'Pecorino',
    'Madero',
    'Jerônimo',
    'Burguer king',
    'Popeyes',
    'Rock n ribs',
    'Pizza Hut',
    'Gendai',
    'Outback',
    'Big x picanha',
    'Domino\'s'
  ]

  constructor() { }

  rodar() {
    this.rodando = true;
    const tamanhoLista = this.listaRestaurantes.length;
    const escolhido = Math.floor(Math.random() * tamanhoLista-1);
    console.log(String(escolhido));

    const itemInicial: HTMLElement = document.getElementById("0") || new HTMLElement;
    const itemFinal: HTMLElement = document.getElementById(String(tamanhoLista - 1))!;
    const itemEscolhido: HTMLElement = document.getElementById(String(escolhido - 1))!;

    const timer = setInterval(() => {
      itemFinal.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {

        itemInicial.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 100);
    



    setTimeout(() => {
      clearInterval(timer);
      setTimeout(() => {
        itemEscolhido.scrollIntoView({ behavior: 'smooth' });
        itemEscolhido.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 3000);
  }

  adicionar() {
    const valor = this.form.controls['restaurante'].value;
    this.listaRestaurantes.push(valor);
    this.form.reset();
    document.getElementById('restaurante')?.focus();
  }
}
