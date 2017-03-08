import { Injectable } from '@angular/core';
import { Http, /*Response,*/ Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx'

@Injectable()
export class PrvNoticia {

  url =  'https://servidorsoroacqua.herokuapp.com/api/noticia';

  constructor(public http: Http) {
  }

  getNoticia(){

    var headers = new Headers({'Content-Type':'application/json'});
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YmYzZmFlODI3MjcyMDAxMWViNzQ3YyIsImlhdCI6MTQ4ODkyODY4Nn0.LORDqaTXF_rBpJFuBLbBQTprfxOYRZWHWlqYIfv9BCY');
    var options = new RequestOptions({headers:headers});

    return this.http.get(this.url, options)
            .map(res=>res.json()).catch(error=>Observable.throw(error.json().error||'Ocorreu um erro'));
  }

}
