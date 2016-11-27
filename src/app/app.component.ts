import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Rio } from '../pages/nosso-rio/rio/rio';
import { Agua } from '../pages/agua/agua';
import { Eventos } from '../pages/agua/eventos/eventos';
import { Projetos } from '../pages/agua/projetos/projetos';
import { SaaePage } from '../pages/agua/saae/saae';
import { Mapa } from '../pages/nosso-rio/mapa/mapa';
import { Historia } from '../pages/nosso-rio/historia/historia';
import { Flora } from '../pages/nosso-rio/flora/flora';
import { Fauna } from '../pages/nosso-rio/fauna/fauna';
import { Despoluicao } from '../pages/nosso-rio/despoluicao/despoluicao';
import { ProjetosRio } from '../pages/nosso-rio/projetos-rio/projetos-rio';
import { AguaConsultaQualidade } from '../pages/agua/agua-consulta-qualidade/agua-consulta-qualidade';
import { Configuracoes } from '../pages/configuracoes/configuracoes';
import { Sobre } from '../pages/sobre/sobre';
import { QualidadeAguaRio } from '../pages/nosso-rio/qualidade-agua-rio/qualidade-agua-rio';
import { EventosRio } from '../pages/nosso-rio/eventos-rio/eventos-rio';
import { PassagemRio } from '../pages/nosso-rio/passagem-rio/passagem-rio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;
  menu: MenuController;

  pages: Array<{title: string, component: any, icon: string,
        itens: Array<{title: string, component: any, icon: string}>, showDetails: boolean }>;

  constructor(public platform: Platform, menu: MenuController) {
    this.initializeApp();
    this.menu = menu;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: Home, icon: '', itens: [], showDetails: false},

      { title: 'Nosso Rio', component: '', icon: 'arrow-dropright', itens: [
        { title: 'Rio', component: Rio, icon: 'boat'},
        { title: 'História', component: Historia, icon: 'book'},
        { title: 'Mapa', component: Mapa, icon: 'map'},
        { title: 'Qualidade da Água', component: QualidadeAguaRio, icon: 'checkmark-circle'},
        { title: 'Despoluição', component: Despoluicao, icon: 'thumbs-up',},
        { title: 'Projetos', component: ProjetosRio, icon: 'paper'},
        { title: 'Eventos', component: EventosRio, icon: 'calendar'},
        { title: 'Flora', component: Flora, icon: 'flower'},
        { title: 'Fauna', component: Fauna, icon: 'paw'},
        { title: 'Por Onde Passa', component: PassagemRio, icon: 'pin'}
      ], showDetails: false},

      { title: 'Nossa Água', component: '', icon: 'arrow-dropright', itens: [
        { title: 'Água', component: Agua, icon: 'water'},
        { title: 'Sub-Estações', component: '', icon: ''},
        { title: 'Tratamento', component: '', icon: ''},
        { title: 'Qualidade', component: AguaConsultaQualidade, icon: ''},
        { title: 'Saae', component: SaaePage, icon: ''},
        { title: 'Projetos', component: Projetos, icon: 'paper'},
        { title: 'Eventos', component: Eventos, icon: 'calendar'}
      ], showDetails: false},

      { title: 'Configurações', component: Configuracoes, icon: '', itens: [], showDetails: false},
      { title: 'Sobre', component: Sobre, icon: '', itens: [], showDetails: false}
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
  //  page.icon = 'add-circle';
    this.nav.setRoot(page.component);
  }

  toggleDetails(page) {
    if(page.component == ''){
      if (page.showDetails) {
       page.showDetails = false;
          page.icon = 'arrow-dropright';

      } else {
          page.showDetails = true;
          //page.icon = 'arrow-dropdown-circle';
          page.icon = '';
      }
    } else{
        this.menu.close();
       this.nav.setRoot(page.component);
    }
  }
}
