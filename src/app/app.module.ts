import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Rio } from '../pages/nosso-rio/rio/rio';
import { Agua } from '../pages/agua/agua';
import { SaaePage } from '../pages/agua/saae/saae';
import { Mapa } from '../pages/nosso-rio/mapa/mapa';
import { Flora } from '../pages/nosso-rio/flora/flora';
import { Fauna } from '../pages/nosso-rio/fauna/fauna';
import { Despoluicao } from '../pages/nosso-rio/despoluicao/despoluicao';
import { Projetos } from '../pages/projetos/projetos';
import { AguaDetalhes } from '../pages/agua/agua-detalhes/agua-detalhes';
import { AguaConsultaQualidade } from '../pages/agua/agua-consulta-qualidade/agua-consulta-qualidade';
import { AguaConsultaQualidadeView } from '../pages/agua/agua-consulta-qualidade/agua-consulta-qualidade-view/agua-consulta-qualidade-view';
import { Sobre } from '../pages/sobre/sobre';
import { QualidadeAguaRio } from '../pages/nosso-rio/qualidade-agua-rio/qualidade-agua-rio';
import { Eventos } from '../pages/eventos/eventos';
import { PassagemRio } from '../pages/nosso-rio/passagem-rio/passagem-rio';
import { SaaeHistoria } from '../pages/agua/saae/saae-historia/saae-historia';
import { EventosView } from '../pages/eventos/eventos-view/eventos-view';
import { DetalhesParametros } from '../pages/nosso-rio/qualidade-agua-rio/detalhes-parametros/detalhes-parametros';
import { ProjetosView } from '../pages/projetos/projetos-view/projetos-view';
import { Tratamento } from '../pages/agua/tratamento/tratamento';
import { Estacoes } from '../pages/agua/estacoes/estacoes';
import { Noticias } from '../pages/noticias/noticias';
import { NoticiasView } from '../pages/noticias/noticias-view/noticias-view';
import { QualidadeAguaRioView } from '../pages/nosso-rio/qualidade-agua-rio/qualidade-agua-rio-view/qualidade-agua-rio-view';
import { DetalhesParametrosAgua } from '../pages/agua/agua-consulta-qualidade/detalhes-parametros-agua/detalhes-parametros-agua';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Rio,
    Agua,
    SaaePage,
    Mapa,
    Flora,
    Fauna,
    Despoluicao,
    Projetos,
    AguaDetalhes,
    AguaConsultaQualidade,
    AguaConsultaQualidadeView,
    Sobre,
    QualidadeAguaRio,
    Eventos,
    PassagemRio,
    SaaeHistoria,
    EventosView,
    DetalhesParametros,
    ProjetosView,
    Tratamento,
    Estacoes,
    Noticias,
    NoticiasView,
    QualidadeAguaRioView,
    DetalhesParametrosAgua
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
    SaaePage,
    Mapa,
    Flora,
    Fauna,
    Despoluicao,
    Projetos,
    AguaDetalhes,
    AguaConsultaQualidade,
    AguaConsultaQualidadeView,
    Sobre,
    QualidadeAguaRio,
    Eventos,
    PassagemRio,
    SaaeHistoria,
    EventosView,
    DetalhesParametros,
    ProjetosView,
    Tratamento,
    Estacoes,
    Noticias,
    NoticiasView,
    QualidadeAguaRioView,
    DetalhesParametrosAgua
  ],
  providers: []
})
export class AppModule {}
