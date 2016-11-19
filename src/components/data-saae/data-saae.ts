import { Component } from '@angular/core';

@Component({
  selector: 'page-data-saae',
  templateUrl: 'data-saae.html'
})
export class DataSaae {

    constructor(public title: string, public itens: Array<{title: string, component: any, icon: string}>,
      public icon: string, public showDetails: boolean) {}

  }
