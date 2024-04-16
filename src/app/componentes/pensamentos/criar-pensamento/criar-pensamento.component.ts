import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  criarPensamento(){
    event?.preventDefault();
    alert("Evento adicionado!");
  }

  pensamento ={
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Marcos Bento',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
