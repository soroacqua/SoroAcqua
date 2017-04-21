import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrvBairro } from '../../../providers/prv-bairro';
import { AguaConsultaQualidadeView } from './agua-consulta-qualidade-view/agua-consulta-qualidade-view';

@Component({
  selector: 'page-agua-consulta-qualidade',
  templateUrl: 'agua-consulta-qualidade.html',
  providers: [PrvBairro]
  })

export class AguaConsultaQualidade {
  public os = 0;
  public bairros: Array<any>;

  constructor(public navCtrl: NavController, private prvBairro: PrvBairro) {
    this.bairros = [];
    this.carregarBairros();
  }

  carregarBairros(){
    this.prvBairro.getBairros().subscribe(res=>{
      console.log(res);
      for (let i = 0; i < res.length; i++) {
          this.bairros.push(res[i]);
      }
    });
  }

  getSelect(os){
    this.navCtrl.push(AguaConsultaQualidadeView, {
      os: this.os
    });
  }
}
