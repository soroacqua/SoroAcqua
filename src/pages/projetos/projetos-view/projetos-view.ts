import { Component } from '@angular/core';
import {NavController, NavParams, ActionSheetController, Platform, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-projetos-view',
  templateUrl: 'projetos-view.html'
})
export class ProjetosView {

  public projeto;

  constructor(private navController: NavController, private navParams: NavParams,
              public platform: Platform, public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController) {
      this.projeto = navParams.get('pProjeto');
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
            console.log('Facebook clicked');

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
              console.log('WhatsApp clicked');

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
              console.log('Gmail clicked');

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
              console.log('Outlook clicked');

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
          handler: () => {
              console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
