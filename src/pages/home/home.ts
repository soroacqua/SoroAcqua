import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Data} from '../../components/data/data';

import { Rio } from '../nosso-rio/rio/rio';
import { Agua } from '../agua/agua';
import { Eventos } from '../agua/eventos/eventos';
import { Projetos } from '../agua/projetos/projetos';
import { Saae } from '../agua/saae/saae';
import { Mapa } from '../nosso-rio/mapa/mapa';
import { Historia } from '../nosso-rio/historia/historia';
import { Flora } from '../nosso-rio/flora/flora';
import { Fauna } from '../nosso-rio/fauna/fauna';
import { Despoluicao } from '../nosso-rio/despoluicao/despoluicao';
import { ProjetosRio } from '../nosso-rio/projetos-rio/projetos-rio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  public dataList: Data[];

  constructor(public navCtrl: NavController) {
    this.dataList = [
      new Data('Home', [] ,'', false),
      new Data('Nossa Água', [{title: 'Água', component: Agua, icon: 'water'},
                              {title: 'Eventos', component: Eventos, icon: 'calendar'},
                              {title: 'Projetos', component: Projetos, icon: 'paper'},
                              {title: 'Saae', component: Saae, icon: 'water'}
                              ],'add-circle', false),
      new Data('Nosso Rio', [{title: 'Mapa', component: Mapa, icon: 'map'},
                              {title: 'O Rio', component: Rio, icon: 'water'},
                              {title: 'Sua Historia', component: Historia, icon: 'water'},
                              {title: 'Sua Flora', component: Flora, icon: 'flower'},
                              {title: 'Sua Fauna', component: Fauna, icon: 'flower'},
                              {title: 'A Despolição', component: Despoluicao, icon: 'water'},
                              {title: 'Seus Projetos', component: ProjetosRio, icon: 'paper'}
                            ],'add-circle', false)
    ];
  }


}
