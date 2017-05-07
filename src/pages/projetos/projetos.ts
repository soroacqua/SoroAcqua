import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, AlertController } from 'ionic-angular';
import { ProjetosView } from './projetos-view/projetos-view';
import { PrvProjetos } from '../../providers/prv-projetos';

@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
  providers: [PrvProjetos]
})
export class Projetos {

  public projetos: Array<any>;
  public query:string;

  constructor(public navCtrl: NavController, public platform: Platform, public actionsheetCtrl: ActionSheetController,
              public alertCtrl: AlertController, private prvProjetos: PrvProjetos) {
    this.projetos = [];
    this.carregarProjetos();
    this.query = '';
  }

  carregarProjetos(){
    this.prvProjetos.getProjeto().subscribe(res=>{
      for (let i = 0; i < res.length; i++) {
          this.projetos.push(res[i]);
      }
    });
  }

  openPageProjeto(projeto){
      this.navCtrl.push(ProjetosView, {
        pProjeto: projeto
      });
  }

  getItems() {
    this.projetos=[];
    if(this.query == ''){
      this.carregarProjetos();
    }
    else{
      this.prvProjetos.getProjeto().subscribe(res=>{
        for (let i = 0; i < res.length; i++) {
          //verifica se o valor digitado no input é igual ou parcialmete igual ao titulo do evento no banco
          if(res[i].titulo.toLowerCase().indexOf(this.query.toLowerCase()) > -1){
            this.projetos.push(res[i]);
          }
        }
      });
    }
  }
}
