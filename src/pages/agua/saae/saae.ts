import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataSaae } from '../../../components/data-saae/data-saae';

import { SaaeHistoria } from 'saae-historia/saae-historia';


@Component({
  selector: 'page-saae',
  templateUrl: 'saae.html'
})
export class SaaePage {

  public dataList: DataSaae[];

    constructor(public navCtrl: NavController) {
      this.dataList = [
          new DataSaae('Saae', [{title: 'História', component: SaaeHistoria, icon: 'ios-albums-outline'}
                              ],'add-circle', false)
      ];
    }


  }
