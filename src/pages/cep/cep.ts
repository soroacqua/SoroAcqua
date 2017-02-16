import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyCEP } from '../../providers/my-cep';

/*
  Generated class for the Cep page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
  providers: [MyCEP]
})
export class Cep {
  resposta;

  constructor(public navCtrl: NavController, private mycep : MyCEP ) {
    this.mycep.getEnderecoCompleto("18057060").subscribe(res=>{
          this.resposta = res;
          console.log(this.resposta);
      });

  }


}
