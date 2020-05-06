import { Component, OnInit } from '@angular/core';

const newLocal = 'app-teste-cadastro';
@Component({
  selector: newLocal,
  templateUrl: './teste-cadastro.component.html',
  styleUrls: ['./teste-cadastro.component.css']
})
export class TesteCadastroComponent  {

  nome: string ="" ;
  adicionado:boolean = false;

  alterarNome(event:any){
    this.nome = event.target.value;
  }

  alterarClick(nome:string){
    this.nome = nome;
    this.adicionado=true;
  }
  limparClick(){
    console.log(this.nome.length);
    this.nome = "";
  }
}
