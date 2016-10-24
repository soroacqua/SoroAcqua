import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, NavParams  } from 'ionic-angular';

import { Mapa } from '../mapa/mapa';

@Component({
  selector: 'page-rio',
  templateUrl: 'rio.html'
})
export class Rio {
  @ViewChild(Nav) nav: Nav;

  selectedItem: any;

  items: Array<{title: string, icon: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.selectedItem = navParams.get('item');

    this.items = [];

      this.items.push({
        title: 'Mapa',
        icon: 'map',
        component: Mapa
      });
      this.items.push({
        title: 'História',
        icon: 'paper',
        component: Mapa
      });
      this.items.push({
        title: 'Nosa Flora',
        icon: 'flower',
        component: Mapa
      });
      this.items.push({
        title: 'Nossa Fauna',
        icon: 'flower',
        component: Mapa
      });
      this.items.push({
        title: 'Despoluição',
        icon: 'water',
        component: Mapa
      });
      this.items.push({
        title: 'Projetos',
        icon: 'clipboard',
        component: Mapa
      });
  }

  openPage(item) {
    this.nav.setRoot(item.component);
  }

}
