import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


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
