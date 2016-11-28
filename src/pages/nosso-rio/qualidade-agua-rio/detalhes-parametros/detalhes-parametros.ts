import { Component } from '@angular/core';
import { NavParams, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-detalhes-parametros',
  templateUrl: 'detalhes-parametros.html'
})
export class DetalhesParametros {

  public op;
  public titulo;
  public texto

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.op = navParams.get('op');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
