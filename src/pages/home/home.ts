import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NoticiasView } from '../noticias/noticias-view/noticias-view';
import { PrvNoticia } from '../../providers/prv-noticia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PrvNoticia]
})
export class Home {
  @ViewChild(Slides) slides: Slides;

  public noticias: Array<any>;

  constructor(platform: Platform, private prvNoticias: PrvNoticia, public navCtrl: NavController) {
    this.noticias = [];
    this.carregarNoticias();
  }

  homeOptions = {
    initialSlide: 0,
    loop: true,
    autoplay:3000,
    autoplayDisableOnInteraction: false,
    pager:true,
    nextButton:true,
    prevButton:true
      };

    carregarNoticias(){
      this.prvNoticias.getNoticia().subscribe(res=>{
        for (let i = 0; i < res.length; i++) {
            this.noticias.push(res[i]);
        }

      });
    }

    openPageNoticiaView(noticia){
        this.navCtrl.push(NoticiasView, {
          noticia: noticia
        });
    }

}
