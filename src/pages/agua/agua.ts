import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Agua page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-agua',
  templateUrl: 'agua.html'
})
export class Agua {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Agua Page');
  }

}
