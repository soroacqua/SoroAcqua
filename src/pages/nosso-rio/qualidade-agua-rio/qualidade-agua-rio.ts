import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QualidadeAguaRioView } from './qualidade-agua-rio-view/qualidade-agua-rio-view';
import { PrvEstacao } from '../../../providers/prv-estacao';

@Component({
  selector: 'page-qualidade-agua-rio',
  templateUrl: 'qualidade-agua-rio.html',
  providers: [PrvEstacao]
})
export class QualidadeAguaRio {
  public idEstacao = -1;
  public nomeEstacao = '';
  public estacoes: Array<any>;

  constructor(public navCtrl: NavController, private prvEstacao: PrvEstacao) {
    this.estacoes = [];
    this.carregarEstacoes();
  }

  carregarEstacoes(){
    this.prvEstacao.getEstacoes().subscribe(res=>{
      for (let i = 0; i < res.length; i++) {
          this.estacoes.push(res[i]);
      }

    });
  }

  openPageQualidade(){
    if(this.idEstacao != -1){
        //pega o nome da estação para exibir da tela de qualidade view
        this.prvEstacao.getEstacoes().subscribe(res=>{
          for (let i = 0; i < res.length; i++) {
            if(res[i]._id == this.idEstacao){
              this.nomeEstacao = res[i].descricao;
            }
          }
        });
        console.log('nome '+this.nomeEstacao);

      this.navCtrl.push(QualidadeAguaRioView, {
        pIdEstacao: this.idEstacao, pNomeEstacao: this.nomeEstacao
      });
    }
      else{
        alert('Selecione um ponto!');
      }
  }
}
