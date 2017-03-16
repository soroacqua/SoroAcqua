import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, AlertController } from 'ionic-angular';
import { ProjetosView } from './projetos-view/projetos-view';
import { PrvProjetos } from '../../providers/prv-projetos';

@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
  providers: [PrvProjetos]
})
export class Projetos {

  public projetos: Array<any>;
  public query:string;

  constructor(public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController, private prvProjetos: PrvProjetos) {
    this.projetos = [];
    this.carregarProjetos();
    this.query = '';
  }

  carregarProjetos(){
    this.prvProjetos.getProjeto().subscribe(res=>{
      console.log(res);
      for (let i = 0; i < res.length; i++) {
          this.projetos.push(res[i]);
      }

    });
  }

  openPage(projeto){
      this.navCtrl.push(ProjetosView, {
        projeto: projeto
      });
  }

  getItems() {
    this.projetos=[];
    if(this.query == ''){
      this.carregarProjetos();
    }
    else{
      this.prvProjetos.getProjeto().subscribe(res=>{
        for (let i = 0; i < res.length; i++) {
          //verifica se o valor digitado no input é igual ou parcialmete igual ao titulo do evento no banco
          if(res[i].titulo.toLowerCase().indexOf(this.query.toLowerCase()) > -1){
            this.projetos.push(res[i]);
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
                subTitle: 'O projeto foi compartilhado com sucesso no Facebook!',
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
                  subTitle: 'O projeto foi compartilhado com sucesso no WhatsApp!',
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
                  subTitle: 'O projeto foi compartilhado com sucesso no Gmail!',
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
                  subTitle: 'O projeto foi compartilhado com sucesso no Outlook!',
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
