import { Component } from '@angular/core';
import { NavParams, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-detalhes-parametros',
  templateUrl: 'detalhes-parametros.html'
})
export class DetalhesParametros {

  public parametro;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.parametro = navParams.get('parametro');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
