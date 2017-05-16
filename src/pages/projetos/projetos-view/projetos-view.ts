import { Component } from '@angular/core';
import {NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-projetos-view',
  templateUrl: 'projetos-view.html'
})
export class ProjetosView {

  public projeto;

  constructor(private navController: NavController, private navParams: NavParams,
             public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController) {
      this.projeto = navParams.get('pProjeto');
  }
}
