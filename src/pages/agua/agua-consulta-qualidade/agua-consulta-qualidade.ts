import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-agua-consulta-qualidade',
  templateUrl: 'agua-consulta-qualidade.html'
})
export class AguaConsultaQualidade {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('Hello AguaConsultaQualidade Page');
  }

}
