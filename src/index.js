/**
 * @author sl
 * 更换服务器：style.sources.tiles[0] 更换内容
 * 1. ip + host
 * 2. TeacherLang ---> 对应的空间名称
 * 3. 3AZJDemoLayers ----> 对应的图层名称
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
        // 'http://116.62.186.152:8080/geoserver/gwc/service/tms/1.0.0/LaiWu%3ALaiWuLayers@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf' // 莱芜
        'http://116.62.186.152:8080/geoserver/gwc/service/tms/1.0.0/BinZhou%3ABinZhouLayers@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf' // 滨州
      ]
    }
  },
  // 点没出来
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
      id: 'GAGNPT',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'GAGNPT',
      "paint": {
        "text-color": "#ffff00",
        "text-halo-color": "#ff0",
        "text-halo-width": 1,
        "text-halo-blur": 0
      }
    },

    {
      id: 'GBOULN',
      type: 'line',
      source: 'composite',
      'source-layer': 'GBOULN', // LN，line的简写
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-width': {
          "base": 1.5,
          "stops": [
            [9, 1],
            [18, 80]
          ]
        },
        'line-color': 'hsl(185, 2%, 15%)'
      }
    },

    {
      id: 'GHFCLN',
      type: 'line',
      source: 'composite',
      'source-layer': 'GHFCLN', // LN，line的简写
      layout: {
        'line-cap': 'round',
        'line-join': 'round',

      },
      paint: {
        'line-width': {
          "base": 1.5,
          "stops": [
            [9, 1],
            [18, 80]
          ]
        },
        'line-color': '#009797', // 军绿色
        // "text-padding": 1,
        // "text-rotation-alignment": "map",
        // "text-pitch-alignment": "viewport",
        // "text-field": "{NAME}",
        // "text-letter-spacing": 0.01
      }
    },

    {
      id: 'GHFCPT',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'GHFCPT',
      layout: {
        'text-pitch-alignment': 'viewport',
        'text-size': 12,
        'icon-image': 'airport-15',
        'symbol-placement': 'point'
      },
    },

    {
      id: 'GHYDPL',
      type: 'fill',
      source: 'composite',
      'source-layer': 'GHYDPL', // py是面
      layout: {},
      paint: {
        'fill-color': 'hsl(55, 1%, 20%)',
        'fill-opacity': 0.1,
        'fill-antialias': false
      }
    },

    {
      id: 'GHYDPT',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'GHYDPT',
      layout: {
        'text-pitch-alignment': 'viewport',
        'text-size': 12,
        'icon-image': 'alcohol-shop-11',
        'symbol-placement': 'point'
      },
      paint: {
        'text-color': 'white'
      }
    },
    {
      id: 'GNPNPT',
      type: 'symbol',
      source: 'composite',
      'source-layer': 'GNPNPT',
      layout: {
        'text-pitch-alignment': 'viewport',
        'text-size': 12,
        'icon-image': 'amusement-park-11',
        'symbol-placement': 'point'
      },
      paint: {
        'text-color': 'white'
      }
    },

    {
      id: 'GRAILN',
      type: 'line',
      source: 'composite',
      'source-layer': 'GRAILN', // LN，line的简写
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-width': {
          "base": 1.5,
          "stops": [
            [9, 1],
            [18, 80]
          ]
        },
        'line-color': '#ffff00'
      }
    },

    {
      id: 'GRESPL',
      type: 'fill',
      source: 'composite',
      'source-layer': 'GRESPL', // py是面
      layout: {},
      paint: {
        'fill-color': '#ff0080',
        'fill-opacity': 0.1,
        'fill-antialias': false
      }
    },

    {
      id: 'GRFCLN',
      type: 'line',
      source: 'composite',
      'source-layer': 'GRFCLN', // LN，line的简写
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-width': {
          "base": 1.5,
          "stops": [
            [9, 1],
            [18, 80]
          ]
        },
        'line-color': 'rgba(253, 122, 0, 0.5)'
      }
    },

    // {
    //   id: 'marine-label-lg-ln',
    //   type: 'symbol',
    //   source: 'composite',
    //   'source-layer': 'HYD_PT', // PT，point的简写
    //   layout: {
    //     'text-field': '{FNAME}',
    //     'text-pitch-alignment': 'viewport',
    //     'text-size': 12
    //   },
    //   paint: {
    //     'text-color': 'black',
    //     'text-halo-blur': 0,
    //     'text-halo-color': 'hsla(0, 0%, 10%, 0.75)'
    //   }
    // }
  ]
};

var map = new mapboxgl.Map({
  hash: true,
  container: 'map',
  style,
  showTileBoundaries: true,
  center: [117.8929, 37.554],
  // center: [117.67868, 36.28647],
  // center: [120.76262, 30.75455],
  zoom: 15,
  minzoom: 7,
  maxzoom: 22,
  localIdeographFontFamily: "'黑体'"
});

map.addControl(new mapboxgl.NavigationControl());