import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, AlertController } from 'ionic-angular';
import { EventosView } from './eventos-view/eventos-view';
import { PrvEventos } from '../../providers/prv-eventos';


@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
  providers: [PrvEventos]
})
export class Eventos {

  public eventos: Array<any>;
  public query:string;

  constructor(public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController, private prvEventos: PrvEventos) {
    this.eventos = [];
    this.carregarEventos();
    this.query = '';
  }

  carregarEventos(){
    this.prvEventos.getEvento().subscribe(res=>{
      console.log(res);
      for (let i = 0; i < res.length; i++) {
          this.eventos.push(res[i]);
      }

    });
  }

  openPage(evento){
      this.navCtrl.push(EventosView, {
        evento: evento
      });
  }

  getItems() {
    this.eventos=[];
    if(this.query == ''){
      this.carregarEventos();
    }
    else{
      this.prvEventos.getEvento().subscribe(res=>{
        for (let i = 0; i < res.length; i++) {
          //verifica se o valor digitado no input é igual ou parcialmete igual ao titulo do evento no banco
          if(res[i].titulo.toLowerCase().indexOf(this.query.toLowerCase()) > -1){
            this.eventos.push(res[i]);
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
                subTitle: 'O evento foi compartilhado com sucesso no Facebook!',
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
                  subTitle: 'O evento foi compartilhado com sucesso no WhatsApp!',
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
                  subTitle: 'O evento foi compartilhado com sucesso no Gmail!',
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
                  subTitle: 'O evento foi compartilhado com sucesso no Outlook!',
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
