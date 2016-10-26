import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

import { Mapa } from '../mapa/mapa';
import { Historia } from '../historia/historia';
import { Flora } from '../flora/flora';
import { Fauna } from '../fauna/fauna';
import { Despoluicao } from '../despoluicao/despoluicao';
import { ProjetosRio } from '../projetos-rio/projetos-rio';

@Component({
  selector: 'page-rio',
  templateUrl: 'rio.html'
})
export class Rio {

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
        component: Historia
      });
      this.items.push({
        title: 'Nosa Flora',
        icon: 'flower',
        component: Flora
      });
      this.items.push({
        title: 'Nossa Fauna',
        icon: 'flower',
        component: Fauna
      });
      this.items.push({
        title: 'Despoluição',
        icon: 'water',
        component: Despoluicao
      });
      this.items.push({
        title: 'Projetos',
        icon: 'clipboard',
        component: ProjetosRio
      });
  }

  openPage(item) {
    this.navCtrl.push(item.component);
  }

}
