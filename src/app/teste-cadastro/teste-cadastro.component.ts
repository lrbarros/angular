import { Component, OnInit, Output } from '@angular/core';

const newLocal = 'app-teste-cadastro';
@Component({
  selector: newLocal,
  templateUrl: './teste-cadastro.component.html',
  styleUrls: ['./teste-cadastro.component.css']
})
export class TesteCadastroComponent  {

  @Output() funcionarios  = [];

  id:number = 0;
  nome: string ="" ;
  adicionado:boolean = false;

  alterarNome(event:any){
    this.nome = event.target.value;
  }

  alterarClick(){
    
    this.funcionarios.push ({
       id: ++this.id,
       nome: this.nome
    });
    this.adicionado=true;
  }

  alterarClickParametro (nomeParam:string){
    
    this.funcionarios.push ({
       id: ++this.id,
       nome: nomeParam
    });
    this.adicionado=true;
  }
  limparClick(){
    this.nome = "";
  }
}
