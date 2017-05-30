import { Component } from '@angular/core';
import {  NavParams, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-detalhes-parametros-agua',
  templateUrl: 'detalhes-parametros-agua.html'
})
export class DetalhesParametrosAgua {

  public parametro;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.parametro = navParams.get('parametro');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
