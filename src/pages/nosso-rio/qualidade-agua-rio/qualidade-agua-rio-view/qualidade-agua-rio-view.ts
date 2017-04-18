import { Component } from '@angular/core';
import { ModalController,  NavParams } from 'ionic-angular';
import { DetalhesParametros } from '../detalhes-parametros/detalhes-parametros';
import { PrvQualidade } from '../../../../providers/prv-qualidade';

@Component({
  selector: 'page-qualidade-agua-rio-view',
  templateUrl: 'qualidade-agua-rio-view.html',
  providers: [PrvQualidade]
})
export class QualidadeAguaRioView {

  public qualidade;
  public idEstacao;

  constructor(public modalCtrl: ModalController,
                  public navParams: NavParams, private prvQualidade: PrvQualidade) {
    this.idEstacao = navParams.get('pIdEstacao');
    this.carregaQualidade(this.idEstacao);
  }

  openPageDetalhes(parametro){
    let modal = this.modalCtrl.create(DetalhesParametros, {parametro: parametro});
    modal.present();
  }

  carregaQualidade(idEst){
    this.prvQualidade.getQualidade(idEst).subscribe(res=>{
      this.qualidade = res.qualidades[0];
    });
  }

}
