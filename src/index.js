import mapboxgl from 'mapbox-gl';
// or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoic2wyMDQ5ODQiLCJhIjoiY2psOXBoYTEwMXFiYjNzbnRvOThyMGNsNyJ9.hQCIhaooyLVO0kGDwSBwrw';
var map = new mapboxgl.Map({
  container: 'app',
  style: 'mapbox://styles/mapbox/streets-v10'
});

console.log(map);