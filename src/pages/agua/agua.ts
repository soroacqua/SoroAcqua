import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AguaDetalhes } from './agua-detalhes/agua-detalhes';

@Component({
  selector: 'page-agua',
  templateUrl: 'agua.html'
})
export class Agua {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Agua Page');
  }

  openPageAguaDetalhe(){
      this.navCtrl.push(AguaDetalhes);
  }


}
