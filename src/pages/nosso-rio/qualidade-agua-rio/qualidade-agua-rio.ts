import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DetalhesParametros } from './detalhes-parametros/detalhes-parametros';

@Component({
  selector: 'page-qualidade-agua-rio',
  templateUrl: 'qualidade-agua-rio.html'
})
export class QualidadeAguaRio {

  constructor(public modalCtrl: ModalController) {}

  openPage(op){
    let modal = this.modalCtrl.create(DetalhesParametros, {op: op});
    modal.present();
  }
}
