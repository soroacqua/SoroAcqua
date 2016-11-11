import { Component } from '@angular/core';
import { Data } from '../data/data';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'data-cards',
  inputs: ['data'],
  templateUrl: 'data-cards.html'
})
export class DataCards {

  public data: Data[];

  constructor(public navCtrl: NavController) {}

  toggleDetails(data: Data) {
    if(data.title != "Home"){
      if (data.showDetails) {
          data.showDetails = false;
          data.icon = 'add-circle';
      } else {
          data.showDetails = true;
          data.icon = 'remove';
      }
    } else{
      this.navCtrl.push(data.title);
    }
  }

  openPage(data: Data, page) {
    data.showDetails = false;
    data.icon = 'add-circle';

    this.navCtrl.push(page.component);
  }

}
