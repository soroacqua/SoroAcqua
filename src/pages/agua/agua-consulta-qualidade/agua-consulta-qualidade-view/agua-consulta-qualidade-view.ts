import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AguaConsultaQualidadeView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-agua-consulta-qualidade-view',
  templateUrl: 'agua-consulta-qualidade-view.html'
})
export class AguaConsultaQualidadeView {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AguaConsultaQualidadeView Page');
  }

}
