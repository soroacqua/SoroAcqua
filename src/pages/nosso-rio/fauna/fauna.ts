import { Component } from '@angular/core';

@Component({
  selector: 'page-fauna',
  templateUrl: 'fauna.html'
})
export class Fauna {

  constructor() {}


  getSelected(event){
    console.log("Opção Selecionada = " + event);
  }
}
