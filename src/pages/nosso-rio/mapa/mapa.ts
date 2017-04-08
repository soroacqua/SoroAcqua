import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import {  GoogleMap,  GoogleMapsEvent,  GoogleMapsLatLng,  GoogleMapsMarker,  Geolocation} from 'ionic-native';

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class Mapa {

  private _latitude: number;
  private _longitude: number;

  constructor(public navCtrl: NavController) {}

  ngAfterViewInit() {
    let map = new GoogleMap(document.getElementById('map'));

    // when the map is ready
    map.one(GoogleMapsEvent.MAP_READY).then(() => {
      Geolocation.getCurrentPosition().then(pos => {
        this._latitude = -23.483965873163474;
        this._longitude = -47.440461476953146;

        // move the camera
        map.moveCamera({
          target: new GoogleMapsLatLng(this._latitude, this._longitude),
          zoom: 15,
          tilt: 30
        }).then(() => {

          // add a markers
          var data = [
            {'title': 'Capivara', 'position': new GoogleMapsLatLng(-23.46899, -47.44033), 
                      'snippet': 'Descrição.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'blue'}},
            {'title': 'Ratão-do-banhado', 'position': new GoogleMapsLatLng(-23.47167, -47.44231), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Jacaré-de-papo-amarelo', 'position': new GoogleMapsLatLng(-23.47466, -47.44226), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Biguá', 'position': new GoogleMapsLatLng(-23.47718, -47.4402), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Frango dágua', 'position': new GoogleMapsLatLng(-23.4795, -47.44068), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Tabarana', 'position': new GoogleMapsLatLng(-23.48072, -47.4384), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Curimbatá', 'position': new GoogleMapsLatLng(-23.48395, -47.43767), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Lambari', 'position': new GoogleMapsLatLng(-23.48652, -47.43759), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Carcará', 'position': new GoogleMapsLatLng(-23.48895, -47.43842), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Cará', 'position': new GoogleMapsLatLng(-23.49123, -47.44226), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Cágado-de-barbicha', 'position': new GoogleMapsLatLng(-23.493, -47.4445), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Irerê', 'position': new GoogleMapsLatLng(-23.49477, -47.4472), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Lambari de rabo vermelho', 'position': new GoogleMapsLatLng(-23.49617, -47.44975), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}},
            {'title': 'Corujinha-buraqueira', 'position': new GoogleMapsLatLng(-23.49823, -47.45101), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green','background-color': 'green'}}
          ];

          for (var i = 0; i < data.length; i++) {
            map.addMarker(data[i])
            
            
            .then((marker: GoogleMapsMarker) => {
                 marker.showInfoWindow();
                 //this.navCtrl.push(QualidadeAguaRioView, { image: data[i].title  });
            });
          }        

          map.on(GoogleMapsEvent.MAP_LOADED).subscribe(
            () => {
              alert('Clique sobre os marcadores para ver os animais que moram ao redor do rio');
            });

            // listen to all available events
            /*
            map.on(GoogleMapsEvent.MAP_CLICK).subscribe(
              () => {
                alert('MAP_CLICK');
              });

            map.on(GoogleMapsEvent.MAP_LONG_CLICK).subscribe(
              () => {
                alert('MAP_LONG_CLICK');
              });

            map.on(GoogleMapsEvent.MY_LOCATION_CHANGE).subscribe(
              () => {
                alert('MY_LOCATION_CHANGE');
              });

            map.on(GoogleMapsEvent.MY_LOCATION_BUTTON_CLICK).subscribe(
              () => {
                alert('MY_LOCATION_BUTTON_CLICK');
              });

            map.on(GoogleMapsEvent.INDOOR_BUILDING_FOCUSED).subscribe(
              () => {
                alert('INDOOR_BUILDING_FOCUSED');
              });

            map.on(GoogleMapsEvent.INDOOR_LEVEL_ACTIVATED).subscribe(
              () => {
                alert('INDOOR_LEVEL_ACTIVATED');
              });

            map.on(GoogleMapsEvent.CAMERA_CHANGE).subscribe(
              () => {
                alert('CAMERA_CHANGE');
              });

            map.on(GoogleMapsEvent.CAMERA_IDLE).subscribe(
              () => {
                alert('CAMERA_IDLE');
              });

            map.on(GoogleMapsEvent.MAP_READY).subscribe(
              () => {
                alert('MAP_READY');
              });

            map.on(GoogleMapsEvent.MAP_LOADED).subscribe(
              () => {
                alert('MAP_LOADED');
              });

            map.on(GoogleMapsEvent.MAP_WILL_MOVE).subscribe(
              () => {
                alert('MAP_WILL_MOVE');
              });

            map.on(GoogleMapsEvent.MAP_CLOSE).subscribe(
              () => {
                alert('MAP_CLOSE');
              });

            map.on(GoogleMapsEvent.MARKER_CLICK).subscribe(
              () => {
                alert('MARKER_CLICK');
              });

            map.on(GoogleMapsEvent.OVERLAY_CLICK).subscribe(
              () => {
                alert('OVERLAY_CLICK');
              });

            map.on(GoogleMapsEvent.INFO_CLICK).subscribe(
              () => {
                alert('INFO_CLICK');
              });

            map.on(GoogleMapsEvent.MARKER_DRAG).subscribe(
              () => {
                alert('MARKER_DRAG');
              });

            map.on(GoogleMapsEvent.MARKER_DRAG_START).subscribe(
              () => {
                alert('MARKER_DRAG_START');
              });

            map.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe(
              () => {
                alert('MARKER_DRAG_END');
              });
              */
          
        });
      });
    });
  }
}
