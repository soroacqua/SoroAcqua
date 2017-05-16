import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, AlertController } from 'ionic-angular';
import { NoticiasView } from './noticias-view/noticias-view';
import { PrvNoticia } from '../../providers/prv-noticia';

@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
  providers: [PrvNoticia]
})
export class Noticias {

  public noticias: Array<any>;
  public query:string;

  constructor(public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController, private prvNoticias: PrvNoticia) {
    this.noticias = [];
    this.carregarNoticias();
    this.query = '';
  }

  carregarNoticias(){
    this.prvNoticias.getNoticia().subscribe(res=>{
      for (let i = 0; i < res.length; i++) {
          this.noticias.push(res[i]);
      }

    });
  }

  openPageNoticia(noticia){
      this.navCtrl.push(NoticiasView, {
        pNoticia: noticia
      });
  }

  getItems() {
    this.noticias=[];
    if(this.query == ''){
      this.carregarNoticias();
    }
    else{
      this.prvNoticias.getNoticia().subscribe(res=>{
        for (let i = 0; i < res.length; i++) {
          //verifica se o valor digitado no input é igual ou parcialmete igual ao titulo do evento no banco
          if(res[i].titulo.toLowerCase().indexOf(this.query.toLowerCase()) > -1){
            this.noticias.push(res[i]);
          }
        }
      });
    }
  }
}
