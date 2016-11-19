import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataSaae } from '../../../components/data-saae/data-saae';

import { SaaeHistoria } from 'saae-historia/saae-historia';


@Component({
  selector: 'page-saae',
  templateUrl: 'saae.html'
})
export class SaaePage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
     this.item = navParams.data.item;
    }
  }/*
  @Component({
    template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Navigation</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-left>
        <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-left></ion-icon>
        {{ item.title }}
      </button>
    </ion-list>
  </ion-content>
  `
  })
  export class SaaePage {
    items = [];
=======
  public dataList: DataSaae[];
>>>>>>> f1f75f008343efb9a0aa8b6947bd21261b215fc2

    constructor(public navCtrl: NavController) {
      this.dataList = [
          new DataSaae('Saae', [{title: 'História', component: SaaeHistoria, icon: 'ios-albums-outline'}
                              ],'add-circle', false)
      ];
    }


  }
*/
