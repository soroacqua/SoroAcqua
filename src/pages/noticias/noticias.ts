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
  private query:string;

  constructor(public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController, private prvNoticias: PrvNoticia) {
    this.noticias = [];
    this.carregarNoticias();
    this.query = '';
  }

  carregarNoticias(){
    this.prvNoticias.getNoticia().subscribe(res=>{
      console.log(res);
      for (let i = 0; i < res.length; i++) {
          this.noticias.push(res[i]);
      }

    });
  }

  openPage(noticia){
      this.navCtrl.push(NoticiasView, {
        noticia: noticia
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

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Compartilhar',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {

            //alert
            let alert = this.alertCtrl.create({
                //title: 'Facebook',
                subTitle: 'A notícia foi compartilhada com sucesso no Facebook!',
                buttons: ['OK']
              });
              alert.present();
          }
        },
        {
          text: 'WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {

              //alert
              let alert = this.alertCtrl.create({
                  subTitle: 'A notícia foi compartilhada com sucesso no WhatsApp!',
                  buttons: ['OK']
                });
                alert.present();
          }
        },
        {
          text: 'Gmail',
          icon: 'mail',
          handler: () => {

              //alert
              let alert = this.alertCtrl.create({
                  subTitle: 'A notícia foi compartilhada com sucesso no Gmail!',
                  buttons: ['OK']
                });
                alert.present();
          }
        },
        {
          text: 'Outlook',
          icon: 'mail',
          handler: () => {

              //alert
              let alert = this.alertCtrl.create({
                  subTitle: 'A notícia foi compartilhada com sucesso no Outlook!',
                  buttons: ['OK']
                });
                alert.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
        }
      ]
    });
    actionSheet.present();
  }

}