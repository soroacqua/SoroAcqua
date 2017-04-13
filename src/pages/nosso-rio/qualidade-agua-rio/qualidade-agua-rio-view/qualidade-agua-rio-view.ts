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
  public ph;
  public dbo;
  public oxigenio_dissolvido;
  public nitrogenio;
  public fosforo;
  public residuo;
  public turpidez;
  public coliformes_termotolerantes;
  public data;

  constructor(public modalCtrl: ModalController,
                  public navParams: NavParams, private prvQualidade: PrvQualidade) {
    this.idEstacao = navParams.get('pIdEstacao');
    this.carregaQualidade(this.idEstacao);
  }

  openPageDetalhes(parametro){
    let modal = this.modalCtrl.create(DetalhesParametros, {parametro: parametro});
    modal.present();
  }

  carregaQualidade(id){
    this.prvQualidade.getQualidade(id).subscribe(res=>{
      this.qualidade = res.qualidades[0];
      alert(this.qualidade.data);
      this.dbo = this.qualidade.dbo;
      this.ph = this.qualidade.ph;
      this.oxigenio_dissolvido = this.qualidade.oxigenio_dissolvido;
      this.nitrogenio = this.qualidade.nitrogenio;
      this.fosforo = this.qualidade.fosforo;
      this.residuo = this.qualidade.residuo;
      this.turpidez = this.qualidade.turpidez;
      this.coliformes_termotolerantes = this.qualidade.coliformes_termotolerantes;
      this.data = this.qualidade.data;
    });
  }

}
