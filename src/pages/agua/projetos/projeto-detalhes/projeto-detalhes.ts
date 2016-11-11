import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-projeto-detalhes',
  templateUrl: 'projeto-detalhes.html'
})
export class ProjetoDetalhes {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProjetoDetalhes Page');
  }

}
