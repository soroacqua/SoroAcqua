import { Component } from '@angular/core';

@Component({
  selector: 'data',
  templateUrl: 'data.html'
})
export class Data {

  constructor(public title: string, public itens: Array<{title: string, component: any, icon: string}>,
    public icon: string, public showDetails: boolean) {}

}
