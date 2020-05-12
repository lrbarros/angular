import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  

  id:number = 0;
  nome: string ;
  adicionado:boolean = false;
  @Output('criado')funcionarioAdicionado = new EventEmitter;

  alterarNome(event:any){
    this.nome = event.target.value;
  }

  alterarClick(){
    
    const funcionario = {
       id: ++this.id,
       nome: this.nome
    };
    this.adicionado=true;
    this.funcionarioAdicionado.emit(funcionario);
  }

  limparClick(){
    this.nome = "";
    this.adicionado=false;
  }

}
