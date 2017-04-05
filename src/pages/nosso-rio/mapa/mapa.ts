import {Component} from "@angular/core";
import {  GoogleMap,  GoogleMapsEvent,  GoogleMapsLatLng,  GoogleMapsMarker,  Geolocation} from 'ionic-native';

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class Mapa {

  private _latitude: number;
  private _longitude: number;

  constructor() {}

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

          // add a marker
          map.addMarker({
            position: new GoogleMapsLatLng(-23.46899, -47.44033),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.47167, -47.44231),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.47466, -47.44226),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.47718, -47.4402),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.4795, -47.44068),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.48072, -47.4384),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.48395, -47.43767),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.48568, -47.43754),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.48652, -47.43759),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.48895, -47.43842),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.49032, -47.43995),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.493, -47.4445),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.49477, -47.4472),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.49617, -47.44975),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.49823, -47.45101),
            title: 'Capivara'
          })
          map.addMarker({
            position: new GoogleMapsLatLng(-23.50052, -47.45161),
            title: 'Capivara'
          })

            // show marker info
          .then((marker: GoogleMapsMarker) => {
            marker.showInfoWindow();

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
    });
  }
}
