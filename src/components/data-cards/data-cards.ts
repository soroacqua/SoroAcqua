import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Data } from '../data/data';

@Component({
  selector: 'page-data-cards',
  inputs: ['data'],
  templateUrl: 'data-cards.html'
})
export class DataCards {

  public data: Data[];

  constructor(public navCtrl: NavController) {}

  toggleDetails(data: Data) {
        if (data.showDetails) {
            data.showDetails = false;
        } else {
            data.showDetails = true;
        }
    }

}
