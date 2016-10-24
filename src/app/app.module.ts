import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Rio } from '../pages/rio/rio';
import { Mapa } from '../pages/mapa/mapa';
import { Agua } from '../pages/agua/agua';
import { Saae } from '../pages/saae/saae';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Rio,
    Mapa,
    Agua,
    Saae
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Rio,
    Mapa,
    Agua,
    Saae
  ],
  providers: []
})
export class AppModule {}
