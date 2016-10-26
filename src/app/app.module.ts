import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Rio } from '../pages/nosso-rio/rio/rio';
import { Agua } from '../pages/agua/agua';
import { Eventos } from '../pages/agua/eventos/eventos';
import { Projetos } from '../pages/agua/projetos/projetos';
import { Saae } from '../pages/agua/saae/saae';
import { Data } from '../components/data/data';
import { DataCards } from '../components/data-cards/data-cards';
import { Mapa } from '../pages/nosso-rio/mapa/mapa';
import { Historia } from '../pages/nosso-rio/historia/historia';
import { Flora } from '../pages/nosso-rio/flora/flora';
import { Fauna } from '../pages/nosso-rio/fauna/fauna';
import { Despoluicao } from '../pages/nosso-rio/despoluicao/despoluicao';
import { ProjetosRio } from '../pages/nosso-rio/projetos-rio/projetos-rio';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Rio,
    Agua,
    Eventos,
    Projetos,
    Saae,
    Data,
    DataCards,
    Mapa,
    Historia,
    Flora,
    Fauna,
    Despoluicao,
    ProjetosRio
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
    Saae,
    Data,
    DataCards,
    Mapa,
    Historia,
    Flora,
    Fauna,
    Despoluicao,
    ProjetosRio
  ],
  providers: []
})
export class AppModule {}
