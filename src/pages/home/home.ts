import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NoticiasView } from '../noticias/noticias-view/noticias-view';
import { PrvNoticia } from '../../providers/prv-noticia';
import { PrvBairro } from '../../providers/prv-bairro';
import { AguaConsultaQualidadeView } from '../agua/agua-consulta-qualidade/agua-consulta-qualidade-view/agua-consulta-qualidade-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PrvNoticia, PrvBairro]
})
export class Home {
  @ViewChild(Slides) slides: Slides;

  public noticias: Array<any>;
  public mensagens: Array<String>;
  public idBairro = -1;
  public bairros: Array<any>;

  constructor(private prvNoticias: PrvNoticia, public navCtrl: NavController, private prvBairro: PrvBairro) {
    this.noticias = [];
    this.mensagens = [];
    this.carregarMensagens();
    this.carregarNoticias();
    this.bairros = [];
    this.carregarBairros();
  }

  noticiaOptions = {
      initialSlide: 0,
      loop: true,
      autoplay:3000,
      autoplayDisableOnInteraction: false,
      pager:true
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
      this.mensagens.push("Água um bem precioso! Vamos economizar!");
      this.mensagens.push("Água, a lição é economizar.");
      this.mensagens.push("Faça sua parte: economize água.");
      this.mensagens.push("Água, economizar é melhor que ficar sem!");
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

    carregarBairros(){
      this.prvBairro.getBairros().subscribe(res=>{
        for (let i = 0; i < res.length; i++) {
            this.bairros.push(res[i]);
        }
      });
    }

    getSelect(){
      if(this.idBairro != -1){
        this.navCtrl.push(AguaConsultaQualidadeView, {
          os: this.idBairro
        });
      }
      else{
        alert('Selecione um bairro!');
      }
    }

}
