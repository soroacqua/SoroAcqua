import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AguaDetalhes } from './agua-detalhes/agua-detalhes';

//coloquei export na frente da classe pois não compilava para android
export class Reservatorio{
  cod:number;
  nome:string;
  end:string;
}

const reservatorios:Reservatorio[] = [
  { cod:1,nome:'Cerrado',end:'General Carneiro'},
  {cod:2,nome:'Cerrado2',end:'General Carneiro'},
  {cod:3,nome:'Cerrado3',end:'General Carneiro'}
];

@Component({
  selector: 'page-agua',
  templateUrl: 'agua.html'
})
export class Agua {
  //alterado para public pois não compila para android
  public reserv:Reservatorio;
  public meusreservatorios:Reservatorio[];
  constructor(public navCtrl: NavController) {
    this.meusreservatorios = reservatorios;
    this.reserv = new Reservatorio;
  }

  ionViewDidLoad() {
    console.log('Hello Agua Page');
  }

  openPageAguaDetalhe(codReserv:number){
      console.log(codReserv);
      this.navCtrl.push(AguaDetalhes);
  }


}
