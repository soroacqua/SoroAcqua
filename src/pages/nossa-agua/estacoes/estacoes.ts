import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-estacoes',
  templateUrl: 'estacoes.html'
})
export class Estacoes {
  public show: any;

  constructor() {
    this.show = 0;
  }

  showDiv(value){
    this.show = value;
  }

}
