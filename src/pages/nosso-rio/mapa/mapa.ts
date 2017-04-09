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
                      'snippet': 'A capivara é uma espécie de mamífero roedor da família Caviidae e subfamília Hydrochoerinae. Ocorre por toda a América do Sul ao leste dos Andes em habitats associados a rios, lagos e pântanos. É o maior roedor do mundo, pesando até 91 kg e medindo até 1,2 m de comprimento e 60 cm de altura. A pelagem é densa, de cor avermelhada a marrom escuro. É possível distinguir os machos por conta da presença de uma glândula proeminente no focinho apesar do dimorfismo sexual não ser aparente.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Ratão-do-banhado', 'position': new GoogleMapsLatLng(-23.47167, -47.44231), 
                      'snippet': 'O ratão-do-banhado também conhecido por nutria, caxingui ou ratão-dágua, é uma espécie de roedor da família Echimyidae. Ocorre no sul da América do Sul. Pelagem marrom-avermelhada, cauda longa e grossa, revestida por escamas e pêlos ralos,vivendo em banhados, lagoas e rios. Dorme durante o dia. Alimenta-se de capim, raízes e plantas aquáticas e herbáceas, tubérculos, folhas, grãos, carne e peixe. O macho cuida dos filhotes no nascimento, protegendo e alimentando até a fêmea se recuperar.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Jacaré-de-papo-amarelo', 'position': new GoogleMapsLatLng(-23.47466, -47.44226), 
                      'snippet': 'O jacaré-de-papo-amarelo é um réptil crocodiliano da família Alligatoridae e gênero Caiman. É amplamente distribuído pelo sudeste da América do Sul, ocorrendo em qualquer ecossistema associado à água nas bacias dos rios Paraná, Paraguai, Uruguai e São Francisco. Também ocorre em ecossistemas costeiros, como mangues. É um animal carnívoro que vive aproximadamente cinquenta anos. São conhecidos por este nome pois, durante a fase do acasalamento, estes animais costumam ficar com a área do papo amarelada..', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Biguá', 'position': new GoogleMapsLatLng(-23.47718, -47.4402), 
                      'snippet': 'O biguá também chamado corvo-marinho, cormorão, pata-dágua, biguaúna, imbiuá, mergulhão e miuá, é uma ave aquática falacrocoracídea preta, de dorso cinza. Tais aves habitam boa parte da região que vai do México à América do Sul, medindo cerca de 75 cm de comprimento e com coloração negra, saco gular amarelo e tarsos negros.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Frango dágua', 'position': new GoogleMapsLatLng(-23.4795, -47.44068), 
                      'snippet': 'A frango dágua mede aproximadamente 37 cm de comprimento. Apresenta um escudo facial vermelho, faixas brancas nos flancos, plumagem negra e patas amarelas. Os imaturos são castanho-escuros com abdome mais claro, sem o escudo facial vermelho. Alimenta-se de uma grande variedade de material vegetal, além de pequenos animais aquáticos. Freqüenta lagos, lagoas, canais, pântanos e também lagunas salobras.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green',}},
            {'title': 'Tabarana', 'position': new GoogleMapsLatLng(-23.48072, -47.4384), 
                      'snippet': 'O Salminus hilarii é um peixe prateado, comumente chamado de tabarana ou tubarana, sendo encontrada na bacia do Rio São Francisco, nos rios Grande e Tietê da bacia do Rio da Prata, nos rios Tocantins e Madeira da bacia Amazônica além da Bacia do Orinoco e rios da Colômbia (Rio Magdalena) e rios do Equador.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Curimbatá', 'position': new GoogleMapsLatLng(-23.48395, -47.43767), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Lambari', 'position': new GoogleMapsLatLng(-23.48652, -47.43759), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Carcará', 'position': new GoogleMapsLatLng(-23.48895, -47.43842), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Cará', 'position': new GoogleMapsLatLng(-23.49123, -47.44226), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Cágado-de-barbicha', 'position': new GoogleMapsLatLng(-23.493, -47.4445), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Irerê', 'position': new GoogleMapsLatLng(-23.49477, -47.4472), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Lambari de rabo vermelho', 'position': new GoogleMapsLatLng(-23.49617, -47.44975), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Corujinha-buraqueira', 'position': new GoogleMapsLatLng(-23.49823, -47.45101), 
                      'snippet': 'Descrição 2.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}}
          ];

          for (var i = 0; i < data.length; i++) {
            map.addMarker(data[i])
            
            
            .then((marker: GoogleMapsMarker) => {
                 marker.showInfoWindow();
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
