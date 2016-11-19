import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Rio } from '../pages/nosso-rio/rio/rio';
import { Agua } from '../pages/agua/agua';
import { Eventos } from '../pages/agua/eventos/eventos';
import { Projetos } from '../pages/agua/projetos/projetos';
import { SaaePage } from '../pages/agua/saae/saae';
import { Data } from '../components/data/data';
import { DataCards } from '../components/data-cards/data-cards';
import { DataSaae } from '../components/data-saae/data-saae';
import { DataCardSaae } from '../components/data-card-saae/data-card-saae';
import { Mapa } from '../pages/nosso-rio/mapa/mapa';
import { Historia } from '../pages/nosso-rio/historia/historia';
import { Flora } from '../pages/nosso-rio/flora/flora';
import { Fauna } from '../pages/nosso-rio/fauna/fauna';
import { Despoluicao } from '../pages/nosso-rio/despoluicao/despoluicao';
import { ProjetosRio } from '../pages/nosso-rio/projetos-rio/projetos-rio';
import { AguaDetalhes } from '../pages/agua/agua-detalhes/agua-detalhes';
import { AguaConsultaQualidade } from '../pages/agua/agua-consulta-qualidade/agua-consulta-qualidade';
//import { ProjetoDetalhes } from '../pages/projetos/projeto-detalhes/projeto-detalhes';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Rio,
    Agua,
    Eventos,
    Projetos,
    SaaePage,
    Data,
    DataCards,
    DataSaae,
    DataCardSaae,
    Mapa,
    Historia,
    Flora,
    Fauna,
    Despoluicao,
    ProjetosRio,
    AguaDetalhes,
    AguaConsultaQualidade
//    ProjetoDetalhes
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Rio,
    Agua,
    Eventos,
    Projetos,
    SaaePage,
    Data,
    DataCards,
    DataSaae,
    DataCardSaae,
    Mapa,
    Historia,
    Flora,
    Fauna,
    Despoluicao,
    ProjetosRio,
    AguaDetalhes,
    AguaConsultaQualidade
  //  ProjetoDetalhes
  ],
  providers: []
})
export class AppModule {}
