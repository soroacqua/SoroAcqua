import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-eventos-view',
  templateUrl: 'eventos-view.html'
})
export class EventosView {

  private evento;

  constructor(private navController: NavController, private navParams: NavParams) {
      this.evento = navParams.get('evento');
  }

}
