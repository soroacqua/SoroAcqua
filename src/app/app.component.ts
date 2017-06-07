import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, AlertController  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Rio } from '../pages/nosso-rio/rio/rio';
import { Agua } from '../pages/nossa-agua/agua';
import { SaaePage } from '../pages/nossa-agua/saae/saae';
import { Mapa } from '../pages/nosso-rio/mapa/mapa';
import { Flora } from '../pages/nosso-rio/flora/flora';
import { Fauna } from '../pages/nosso-rio/fauna/fauna';
import { Despoluicao } from '../pages/nosso-rio/despoluicao/despoluicao';
import { Projetos } from '../pages/projetos/projetos';
import { AguaConsultaQualidade } from '../pages/nossa-agua/agua-consulta-qualidade/agua-consulta-qualidade';
import { Sobre } from '../pages/sobre/sobre';
import { QualidadeAguaRio } from '../pages/nosso-rio/qualidade-agua-rio/qualidade-agua-rio';
import { Eventos } from '../pages/eventos/eventos';
import { PassagemRio } from '../pages/nosso-rio/passagem-rio/passagem-rio';
import { Estacoes } from '../pages/nossa-agua/estacoes/estacoes';
import { Noticias } from '../pages/noticias/noticias';
import { Tratamento } from '../pages/nossa-agua/tratamento/tratamento';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;
  menu: MenuController;

  pages: Array<{title: string, component: any, icon: string,
        itens: Array<{title: string, component: any, icon: string}>, showDetails: boolean }>;

  constructor(public platform: Platform, menu: MenuController, public alertCtrl: AlertController) {
    this.initializeApp();
    this.menu = menu;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: 'inicio', icon: 'home', itens: [], showDetails: false},

      { title: 'Nosso Rio', component: '', icon: 'arrow-forward', itens: [
        { title: 'Rio', component: Rio, icon: 'boat'},
        { title: 'Mapa', component: Mapa, icon: 'map'},
        { title: 'Qualidade da Água', component: QualidadeAguaRio, icon: 'stats'},
        { title: 'Despoluição', component: Despoluicao, icon: 'checkbox',},
        { title: 'Flora', component: Flora, icon: 'flower'},
        { title: 'Fauna', component: Fauna, icon: 'paw'},
        { title: 'Por Onde Passa?', component: PassagemRio, icon: 'pin'}
      ], showDetails: false},

      { title: 'Nossa Água', component: '', icon: 'arrow-forward', itens: [
        { title: 'Água', component: Agua, icon: 'water'},
        { title: 'Estações', component: Estacoes, icon: 'color-fill'},
        { title: 'Tratamento', component: Tratamento, icon: 'construct'},
        { title: 'Qualidade da Água', component: AguaConsultaQualidade, icon: 'stats'},
        { title: 'Saae', component: SaaePage, icon: 'people'},
      ], showDetails: false},
      { title: 'Notícias', component: Noticias, icon: 'paper', itens: [], showDetails: false},
      { title: 'Eventos', component: Eventos, icon: 'calendar', itens: [], showDetails: false},
      { title: 'Projetos', component: Projetos, icon: 'book', itens: [], showDetails: false},
      { title: 'Sobre', component: Sobre, icon: '', itens: [], showDetails: false},
      { title: 'Sair', component: 'close', icon: '', itens: [], showDetails: false}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    page.showDetails = false;
    this.nav.push(page.component);
  }

  toggleDetails(page) {
      if(page.component == 'close'){
        this.platform.exitApp();
      }
      else if(page.component == 'inicio'){
          this.menu.close();
      }
      else if(page.component == ''){
        if (page.showDetails) {
            page.showDetails = false;
            page.icon = 'arrow-forward';
        } else {
            page.showDetails = true;
            page.icon = 'arrow-down';
        }
    } else{
        this.menu.close();
        this.nav.push(page.component);
    }
  }
}
