import { Component } from '@angular/core';
import { DataSaae } from '../data-saae/data-saae';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-data-card-saae',
  templateUrl: 'data-card-saae.html'
})
export class DataCardSaae {

  public datasaae: DataSaae[];
  constructor(public navCtrl: NavController) {}

  toggleDetails(datasaae: DataSaae) {
    if(datasaae.title != "Home"){
      if (datasaae.showDetails) {
          datasaae.showDetails = false;
          datasaae.icon = 'add-circle';
      } else {
          datasaae.showDetails = true;
          datasaae.icon = 'remove';
      }
    } else{
      this.navCtrl.push(datasaae.title);
    }
  }

  openPage(datasaae: DataSaae, page) {
    datasaae.showDetails = false;
    datasaae.icon = 'add-circle';

    this.navCtrl.push(page.component);
  }

  }
