import { Component } from '@angular/core';
import {NavParams, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-noticias-view',
  templateUrl: 'noticias-view.html'
})
export class NoticiasView {

  public noticia;

  constructor(public navParams: NavParams,
              public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController) {
      this.noticia = navParams.get('pNoticia');
  }
}
