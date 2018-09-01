/**
 * @author sl
 * 更换服务器：style.sources.tiles[0] 更换内容
 * 1. ip + host
 * 2. TeacherLang ---> 对应的空间名称
 * 4. 3AZJDemoLayers ----> 对应的图层名称
 */

import mapboxgl from 'mapbox-gl';
// import sprite from './sprite.json';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2wyMDQ5ODQiLCJhIjoiY2psOXBoYTEwMXFiYjNzbnRvOThyMGNsNyJ9.hQCIhaooyLVO0kGDwSBwrw';

var style = {
  version: 8,
  name: 'Mapbox Dark',
  metadata: {},
  sources: {
    composite: {
      type: 'vector',
      scheme: 'tms',
      tiles: [
        'http://211.151.181.125:8080/geoserver/gwc/service/tms/1.0.0/TeacherLang%3AZJDemoLayers@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf'
      ]
    }
  },
  sprite: 'mapbox://sprites/mapbox/dark-v9',
  glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
  visibility: 'public',
  layers: [{
      id: 'background',
      type: 'background',
      layout: {},
      paint: {
        'background-color': 'white'
      }
    },
    {
      id: 'landcover_wood',
      type: 'fill',
      source: 'composite',
      'source-layer': 'HYD_PY',
      layout: {},
      paint: {
        'fill-color': 'hsl(55, 1%, 20%)',
        'fill-opacity': 0.1,
        'fill-antialias': false
      }
    },
    {
      id: 'HYD_LN',
      type: 'line',
      source: 'composite',
      'source-layer': 'HYD_LN',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-width': 16,
        'line-color': 'hsl(185, 2%, 15%)'
      }
    },
    {
      id: 'HYD_LN_label',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'HYD_LN',
      layout: {
        'text-field': '{FNAME}',
        'text-pitch-alignment': 'viewport',
        'text-size': 12,
        'text-font': ['Arial Unicode MS Regular'],
        'symbol-placement': 'line'
      },
      paint: {
        'text-color': 'white'
      }
    },
    {
      id: 'HYD_LN_label_icon',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'HYD_LN',
      layout: {
        'text-pitch-alignment': 'viewport',
        'text-size': 12,
        'icon-image': 'airfield-15',
        'symbol-placement': 'point'
      },
      paint: {
        'text-color': 'white'
      }
    },
    {
      id: 'marine-label-lg-ln',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'HYD_PT',
      layout: {
        'text-field': '{FNAME}',
        'text-pitch-alignment': 'viewport',
        'text-size': 12
      },
      paint: {
        'text-color': 'black',
        'text-halo-blur': 0,
        'text-halo-color': 'hsla(0, 0%, 10%, 0.75)'
      }
    }
  ]
};

var map = new mapboxgl.Map({
  hash: true,
  container: 'map',
  style,
  showTileBoundaries: true,
  center: [120.76262, 30.75455],
  zoom: 15,
  localIdeographFontFamily: "'黑体'"
});

map.addControl(new mapboxgl.NavigationControl());