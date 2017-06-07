import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';
import {  GoogleMap,  GoogleMapsEvent,  GoogleMapsLatLng,  GoogleMapsMarker,  Geolocation} from 'ionic-native';
//import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class Mapa {

  private _latitude: number;
  private _longitude: number;

  constructor(public navCtrl: NavController) {  }

  /*presentAlert() {
        let alert = this.alertCtrl.create({
          title: 'Mapa',
          subTitle: 'Clique sobre os marcadores para ver os animais que moram ao redor do rio.',
          buttons: [{
                text: 'OK',
                role: 'cancel'
                 }]
        });
        alert.present();
      }*/

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
                      'snippet': 'O curimbatá, também chamado papa-terra, curibatá, curimatá, curimatã, curimataú, curimba, curumbatá, crumatá, grumatá e grumatã, é um peixe teleósteo caraciforme da família dos caracídeos, da subfamília dos proquilodontídeos, especialmente do gênero Prochilodus. Vive em todo o território brasileiro. Alimenta-se de vegetais e de lodo. Pode ser aproveitado para aquacultura', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Lambari', 'position': new GoogleMapsLatLng(-23.48652, -47.43759), 
                      'snippet': 'Lambari é a designação vulgar de várias espécies de peixes do gênero Astyanax, da família Characidae, comum nos rios, lagoas, córregos e represas do Brasil. Seu tamanho médio é entre os 10 e os 15 centímetros de comprimento, possuindo um corpo prateado e nadadeiras com cores que variam conforme as espécies, sendo mais comuns os tons de amarelo, vermelho e preto. São peixes onívoros e a base da alimentação de diversos peixes predadores.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Carcará', 'position': new GoogleMapsLatLng(-23.48895, -47.43842), 
                      'snippet': 'Carcará ou caracará (nome científico: Caracara plancus) é uma espécie de ave de rapina da família dos falconídeos. Mede até 60 cm de altura e sua envergadura chega a 123 cm. Habita o centro e o sul de toda a América do Sul.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Cará', 'position': new GoogleMapsLatLng(-23.49123, -47.44226), 
                      'snippet': 'Cará (Pterophyllum) é um gênero de peixes de água doce, pertencente à família Cichlidae. Vive em cardume e alimenta-se predominantemente de pequenos crustáceos, peixes, larvas, insetos e outras matérias orgânicas. Nativos da bacia Amazônica podem chegar a 15 centímetros de comprimento e habita pequenos rios e lagos com densa vegetação aquática. As suas principais características são as suas variadas colorações, que se desenvolveram ao longo do tempo, o formato triangular do seu corpo e as suas longas barbatanas dorsal e caudal.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Cágado-de-barbicha', 'position': new GoogleMapsLatLng(-23.493, -47.4445), 
                      'snippet': 'A espécie distribui-se pela América Latina sendo encontrada na Bolívia, Venezuela, Colômbia, Peru, Equador, Guiana, Paraguai, Argentina e Brasil. Habita lagos, lagoas, pântanos e rios de correnteza fraca como trechos da Bacia Amazônica, rio Paraná e São Francisco. O casco tem coloração dorsal cinza-esverdeada e ventral avermelhada com manchas pretas, ele é largo e achatado dorsiventralmente. Ótimo nadador, os dedos são ligados por membranas que auxiliam na natação.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Irerê', 'position': new GoogleMapsLatLng(-23.49477, -47.4472), 
                      'snippet': 'A Dendrocygna viduata é uma espécie de marreca encontrada na África tropical, nas Antilhas e na América do Sul. Tais aves medem cerca de 44 centímetros de comprimento e têm plumagem em máscara, calça e luva brancas, nuca e asas negras, flancos listrados, bicos e pés plúmbeos. A ave, que comumente é chamada irerê mas também é conhecido como paturi, marrecão (Rio Grande do Sul) e siriri ou marreca-viúva (Paraíba).', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Lambari de rabo vermelho', 'position': new GoogleMapsLatLng(-23.49617, -47.44975), 
                      'snippet': 'Da família Characidae (Caracídeos), o Lambari de rabo vermelho tem origem na América do Norte, Central e do Sul. Encontrado desde o México até Argentina. Quando adulto pode chegar até 17 cm e possui uma expectativa de Vida de 5 anos.', 
                      'styles': {'text-align': 'center','font-style': 'italic', 'font-weight': 'bold', 
                      'color': 'green'}},
            {'title': 'Corujinha-buraqueira', 'position': new GoogleMapsLatLng(-23.49823, -47.45101), 
                      'snippet': 'A coruja-buraqueira (Athene cunicularia, anteriormente Speotyto cunicularia), também chamada caburé-do-campo, coruja-do-campo, coruja-mineira, corujinha-buraqueira, corujinha-do-buraco, guedé, urucuera, urucureia e urucuriá, recebe o nome de "buraqueira" por viver em buracos cavados no solo. Embora seja capaz de cavar seu próprio buraco, prefere os buracos abandonados de outros animais, como os dos tatus. É uma coruja terrícola e de hábitos diurnos, embora tenda a evitar o calor do meio-dia. Ocorre do Canadá à Terra do Fogo, bem como em quase todo o Brasil, mas com a exceção da Amazônia. Tais aves chegam a medir até 27 centímetros de comprimento. Costumam viver em campos, pastos, restingas, desertos, planícies, praias e aeroportos.', 
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
                //this.presentAlert();
                alert("Clique sobre os marcadores para ver os animais que moram ao redor do rio.");
            }); 
        });
      });
    });
  }
}