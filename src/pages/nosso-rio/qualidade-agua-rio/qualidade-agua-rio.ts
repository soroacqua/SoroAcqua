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
  public idEstacao = 0;
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

  openPage(){
    this.navCtrl.push(QualidadeAguaRioView, {
      idEstacao: this.idEstacao
    });
  }
}
