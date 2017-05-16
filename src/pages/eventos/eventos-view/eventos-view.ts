import { Component } from '@angular/core';
import {NavController, NavParams, ActionSheetController, Platform, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-eventos-view',
  templateUrl: 'eventos-view.html'
})
export class EventosView {

  public evento;

  constructor(private navController: NavController, private navParams: NavParams,
              public platform: Platform, public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController) {
      this.evento = navParams.get('pEvento');
  }
}
