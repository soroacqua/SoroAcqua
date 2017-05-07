import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, AlertController, LoadingController } from 'ionic-angular';
import { EventosView } from './eventos-view/eventos-view';
import { PrvEventos } from '../../providers/prv-eventos';


@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
  providers: [PrvEventos]
})
export class Eventos {

  public eventos: Array<any>;
  public query:string;

  constructor(public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController, private prvEventos: PrvEventos, public loadingCtrl: LoadingController) {
    this.eventos = [];
    this.carregarEventos();
    this.query = '';
  }

  carregarEventos(){
    //this.presentLoadingDefault();

    this.prvEventos.getEvento().subscribe(res=>{
      for (let i = 0; i < res.length; i++) {
          this.eventos.push(res[i]);
      }

    });
  }

  openPageEvento(evento){
      this.navCtrl.push(EventosView, {
        pEvento: evento
      });
  }

  getItems() {
    this.eventos=[];
    if(this.query == ''){
      this.carregarEventos();
    }
    else{
      this.prvEventos.getEvento().subscribe(res=>{
        for (let i = 0; i < res.length; i++) {
          //verifica se o valor digitado no input é igual ou parcialmete igual ao titulo do evento no banco
          if(res[i].titulo.toLowerCase().indexOf(this.query.toLowerCase()) > -1){
            this.eventos.push(res[i]);
          }
        }
      });
    }
  }

  presentLoadingDefault() {
      let loading = this.loadingCtrl.create({
        content: 'Por favor espere...'
      });

      loading.present();

      setTimeout(() => {
        loading.dismiss();
      }, 2000);
    }
}
