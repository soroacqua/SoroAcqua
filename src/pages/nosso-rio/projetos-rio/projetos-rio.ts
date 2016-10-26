import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ProjetosRio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-projetos-rio',
  templateUrl: 'projetos-rio.html'
})
export class ProjetosRio {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProjetosRio Page');
  }

}
