import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NoticiasView } from '../noticias/noticias-view/noticias-view';
import { PrvNoticia } from '../../providers/prv-noticia';
//import { AguaConsultaQualidade } from '../agua/agua-consulta-qualidade/agua-consulta-qualidade';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PrvNoticia]
})
export class Home {
  @ViewChild(Slides) slides: Slides;

  public noticias: Array<any>;
  public mensagens: Array<String>;

  constructor(private prvNoticias: PrvNoticia, public navCtrl: NavController) {
    this.noticias = [];
    this.mensagens = [];
    this.carregarMensagens();
    this.carregarNoticias();
  }

  noticiaOptions = {
      initialSlide: 0,
      loop: true,
      autoplay:3000,
      autoplayDisableOnInteraction: false,
      pager:true,
      nextButton: true,
      prevButton: true
      };

    mensagemOptions = {
      initialSlide: 0,
      loop: true,
      autoplay:5000,
      autoplayDisableOnInteraction: false,
      pager:false,
      effect: 'fade',
      nextButton: true,
      prevButton: true
    };

    carregarNoticias(){
      this.prvNoticias.getNoticia().subscribe(res=>{
        for (let i = 0; i < res.length; i++) {
            this.noticias.push(res[i]);
        }

      });
    }

    carregarMensagens(){
      this.mensagens.push("Água um bem preciosa! Vamos economizar!");
      this.mensagens.push("Água a lição é economizar.");
      this.mensagens.push("Faça sua parte: economize água.");
      this.mensagens.push("Água, economizar é melhor que ficar sem");
      this.mensagens.push("O Rio Sorocaba é nosso bem, não polua.");
      this.mensagens.push("Escove os dentes com a torneira desligada.");
      this.mensagens.push("Tome banhos curtos.");
      this.mensagens.push("Criatividade no reuso: água da máquina para lavar o quintal.");
      this.mensagens.push("Vassoura sempre! Nada de mangueira para empurrar sujeira");
    }

    openPageNoticiaView(noticia){
        this.navCtrl.push(NoticiasView, {
          pNoticia: noticia
        });
    }

}
