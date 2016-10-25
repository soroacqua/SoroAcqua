import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Eventos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html'
})
export class Eventos {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Eventos Page');
  }

}
