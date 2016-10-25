import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Projetos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html'
})
export class Projetos {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Projetos Page');
  }

}
