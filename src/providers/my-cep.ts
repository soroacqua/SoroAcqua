import { Injectable } from '@angular/core';
import { Http, /*Response,*/ Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class MyCEP {


  constructor(public http: Http) {}

  getEnderecoCompleto(cep:string){

    var headers = new Headers({'Content-Type':'application/json'});

    var options = new RequestOptions({headers:headers});

    return this.http.get('https://viacep.com.br/ws/'+cep+'/json/', options)
            .map(res=>res.json()).catch(error=>Observable.throw(error.json().error||'Ocorreu um erro'));
  }

}
