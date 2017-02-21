import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Estacoes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-estacoes',
  templateUrl: 'estacoes.html'
})
export class Estacoes {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Estacoes Page');
  }

}
