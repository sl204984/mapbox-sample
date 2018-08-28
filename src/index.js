import mapboxgl from 'mapbox-gl';
import data from './gaochun.js';
import styles from './mapbox-style';

console.log('data', data);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2wyMDQ5ODQiLCJhIjoiY2psOXBoYTEwMXFiYjNzbnRvOThyMGNsNyJ9.hQCIhaooyLVO0kGDwSBwrw';

var map = new mapboxgl.Map({
  container: 'map',
  style: styles,
  center: [118.87362215413384, 31.41160631858577],
  zoom: 10
});
map.on('load', function () {

  map.addLayer({
    'id': 'maine',
    'type': 'fill',
    'source': {
      'type': 'geojson',
      'data': data
    },
    'layout': {},
    'paint': {
      'fill-color': '#088',
      'fill-opacity': 0.8
    }
  });
});