import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Historia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html'
})
export class Historia {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Historia Page');
  }

}
