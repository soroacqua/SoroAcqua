import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TesteCep page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teste-cep',
  templateUrl: 'teste-cep.html'
})
export class TesteCep {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TesteCep Page');
  }

}
