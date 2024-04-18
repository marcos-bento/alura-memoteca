import { Component, OnInit, inject } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento:Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  
  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(id!).subscribe((pensamento) =>{
      this.pensamento = pensamento
    })
  }

  excluirPensamento(){
    if (this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(()=>{
        this.router.navigate(['/listarPensamentos']);
      })
    }
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamentos']);
  }

}
