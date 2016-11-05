import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AguaConsultaQualidade } from './agua-consulta-qualidade/agua-consulta-qualidade/';

@Component({
  selector: 'page-agua-detalhes',
  templateUrl: 'agua-detalhes.html'
})
export class AguaDetalhes {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('Hello AguaDetalhes Page');
  }

  openPageConsultaQualidade(){
      this.navCtrl.push(AguaConsultaQualidade);
  }
}
