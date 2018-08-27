import mapboxgl from 'mapbox-gl';
// or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1Ijoic2wyMDQ5ODQiLCJhIjoiY2psOXBoYTEwMXFiYjNzbnRvOThyMGNsNyJ9.hQCIhaooyLVO0kGDwSBwrw';
// var map = new mapboxgl.Map({
//   container: 'app',
//   style: 'mapbox://styles/mapbox/streets-v10'
// });

// var map = new mapboxgl.Map({
//   container: 'app', // container id
//   style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
//   center: [-74.50, 40], // starting position [lng, lat]
//   zoom: 9 // starting zoom
// });

// 3d模型
var map = new mapboxgl.Map({
  style: 'mapbox://styles/mapbox/light-v9',
  center: [118.7786, 32.04389], // 南京新街口
  // center: [118.81892, 32.0802], // 南京林业大学
  // center: [118.7879, 32.0574], // 东南大学
  zoom: 15.5,
  pitch: 45,
  bearing: -17.6,
  container: 'app'
});

// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function () {
  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map.addLayer({
    'id': '3d-buildings',
    'source': 'composite',
    'source-layer': 'building',
    'filter': ['==', 'extrude', 'true'],
    'type': 'fill-extrusion',
    'minzoom': 15,
    'paint': {
      'fill-extrusion-color': '#aaa',

      // use an 'interpolate' expression to add a smooth transition effect to the
      // buildings as the user zooms in
      'fill-extrusion-height': [
        "interpolate", ["linear"],
        ["zoom"],
        15, 0,
        15.05, ["get", "height"]
      ],
      'fill-extrusion-base': [
        "interpolate", ["linear"],
        ["zoom"],
        15, 0,
        15.05, ["get", "min_height"]
      ],
      'fill-extrusion-opacity': .6
    }
  }, labelLayerId);
});