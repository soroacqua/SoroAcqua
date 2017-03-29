import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, AlertController } from 'ionic-angular';
import { PrvBairro } from '../../../providers/prv-bairro';
import {AguaConsultaQualidadeView} from './agua-consulta-qualidade-view/agua-consulta-qualidade-view';



@Component({
  selector: 'page-agua-consulta-qualidade',
  templateUrl: 'agua-consulta-qualidade.html',
  providers: [PrvBairro]
  })

export class AguaConsultaQualidade {
  os : string;
  public bairros: Array<any>;

  constructor(public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController, private prvBairro: PrvBairro) {
    this.bairros = [];
    this.carregarBairros();
  }

  carregarBairros(){
    this.prvBairro.getBairros().subscribe(res=>{
      console.log(res);
      for (let i = 0; i < res.length; i++) {
          this.bairros.push(res[i]);
      }

    });
  }

  ionViewDidLoad() {
    console.log('Hello AguaConsultaQualidade Page');
  }

  getSelect(os){
    this.navCtrl.push(AguaConsultaQualidadeView, {
      os: os
    });

    console.log("Bairro selecionado = " + this.os);
  }


}
