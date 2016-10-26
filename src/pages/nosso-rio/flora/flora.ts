import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Flora page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-flora',
  templateUrl: 'flora.html'
})
export class Flora {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Flora Page');
  }

}
