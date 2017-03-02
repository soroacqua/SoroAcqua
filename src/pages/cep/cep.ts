import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyCEP } from '../../providers/my-cep';

@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
  providers: [MyCEP]
})
export class Cep {
  //Não conseguir usar private resposta, pois não pode ser usado no getEndereço. Porque??? Pesquisar
  resposta : Array<{bairro: string, cep: string, complemento: string,
                            gia: string, ibge: string, localidade: string, logradouro: string,
                            uf: string, unidade: string}>;
  numCEP: string;

  constructor(public navCtrl: NavController, private mycep : MyCEP ) {
  }

  getEndereco(numCEP){
    if(this.numCEP == null){
      console.log("Numero do CEP inválido");
    }
    else{
      this.mycep.getEnderecoCompleto(this.numCEP).subscribe(res=>{
            this.resposta = [{bairro: res.bairro, cep: res.cep, complemento: res.complemento,
                                      gia: res.gia, ibge: res.ibge, localidade: res.localidade, logradouro: res.logradouro,
                                      uf: res.uf, unidade: res.unidade}];
            console.log(res);

        });
    }
  }
}
