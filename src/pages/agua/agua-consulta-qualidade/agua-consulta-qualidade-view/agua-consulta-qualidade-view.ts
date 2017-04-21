import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { DetalhesParametrosAgua } from '../detalhes-parametros-agua/detalhes-parametros-agua';
import { PrvQualidade } from '../../../../providers/prv-qualidade';

@Component({
  selector: 'page-agua-consulta-qualidade-view',
  templateUrl: 'agua-consulta-qualidade-view.html',
  providers: [PrvQualidade]
})
export class AguaConsultaQualidadeView {
  public qualidade;
  public id_estacao;

  constructor(public modalCtrl: ModalController, public navParams: NavParams, private prvQualidade: PrvQualidade) {
      this.id_estacao = navParams.get('os');

    this.carregaQualidade(this.id_estacao);
  }

  openPageDetalhes(parametro){
    let modal = this.modalCtrl.create(DetalhesParametrosAgua, {parametro: parametro});
    modal.present();
  }

  carregaQualidade(id){
    this.prvQualidade.getQualidade(id).subscribe(res=>{
      this.qualidade = res.qualidades[0];
    });
  }

  .directive('active', function($location) {
  return {
    link: function(scope, el, attrs) {
      if('#'+$location.path() == attrs.href) {
        el.addClass('active');
      }
    }
  }
})
}
