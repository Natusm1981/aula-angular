import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  carro = { // Simula a pegar dados do banco de DADOS
    nome: 'Gol',
    cor: 'Prata',
    ano: '2015',
    potencia: '120',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
