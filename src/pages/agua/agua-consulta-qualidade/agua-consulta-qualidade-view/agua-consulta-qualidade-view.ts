import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrvQualidade } from '../../../../providers/prv-qualidade';

@Component({
  selector: 'page-agua-consulta-qualidade-view',
  templateUrl: 'agua-consulta-qualidade-view.html',
  providers: [PrvQualidade]
})
export class AguaConsultaQualidadeView {
  public qualidade;
  public id_estacao;

  constructor(public navCtrl: NavController, public navParams: NavParams, private prvQualidade: PrvQualidade) {
      this.id_estacao = navParams.get('os');

    this.carregaQualidade(this.id_estacao);
  }

  ionViewDidLoad() {
    console.log('Hello AguaConsultaQualidadeView Page');
  }

  carregaQualidade(id){
    this.prvQualidade.getQualidade(id).subscribe(res=>{
      console.log(res);
      this.qualidade = res.qualidades[0];  
      console.log(this.qualidade);
    });


  }


}
