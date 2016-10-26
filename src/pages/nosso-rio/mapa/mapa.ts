import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class Mapa {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Mapa Page');
  }

}
