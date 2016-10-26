import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Fauna page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fauna',
  templateUrl: 'fauna.html'
})
export class Fauna {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Fauna Page');
  }

}
