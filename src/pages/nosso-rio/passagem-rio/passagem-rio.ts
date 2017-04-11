import { Component } from '@angular/core';

@Component({
  selector: 'page-passagem-rio',
  templateUrl: 'passagem-rio.html'
})
export class PassagemRio {

  public show: any;

  constructor() {
    this.show = 0;
  }

  showDiv(value){
    this.show = value;
  }

}
