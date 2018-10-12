/**
 * @author sl 2019-01-02
 * 11级，包括公园，医院
 */
import CONFIG from '../config';

const _visibleLevel = 11;
const _roadVisibleLv = 11;

const style = {
  source: {
    [CONFIG.addLv11]: {
      type: 'vector',
      scheme: 'tms',
      tiles: [
        'http://116.62.186.152:8080/geoserver/gwc/service/tms/1.0.0/SDWorkSpace%3ASD_11L@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf'
      ],
      minzoom: _visibleLevel
    },
  },
  layers: [{
      id: 'GROLAN_11_1009_bg', // 路网图层（name字段），次干道、县道
      type: 'line',
      source: CONFIG.addLv11,
      'source-layer': 'GROLAN_11_1009',
      minzoom: _roadVisibleLv,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-width': {
          'base': 2,
          'stops': [
            [7, 3],
            [8, 2],
            [9, 3],
            [10, 4],
            [11, 4],
            [12, 7],
            [13, 9],
            [14, 9],
            [15, 10],
            [16, 10],
            [17, 12],
            [18, 14],
            [19, 14],
            [20, 22]
          ]
        },
        'line-color': '#D6B95A'
      },
      labelLayerId: 'GVEGPL'
    }, {
      id: 'GROLAN_11_1009', // 路网图层（name字段），次干道、县道
      type: 'line',
      source: CONFIG.addLv11,
      'source-layer': 'GROLAN_11_1009',
      minzoom: _roadVisibleLv,
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-width': {
          'base': 2,
          'stops': [
            [7, 2],
            [8, 1],
            [9, 2],
            [10, 3],
            [11, 3],
            [12, 5],
            [13, 6],
            [14, 6],
            [15, 7],
            [16, 7],
            [17, 9],
            [18, 11],
            [19, 11],
            [20, 19]
          ]
        },
        'line-color': '#FEEB82'
      },
      labelLayerId: 'GVEGPL'
    }, {
      id: 'GROLAN_11_1009_NAME', // 省道名称
      type: 'symbol',
      source: CONFIG.addLv11,
      'source-layer': 'GROLAN_11_1009',
      minzoom: _roadVisibleLv,
      layout: {
        'text-field': '{NAME}',
        'visibility': 'visible',
        'symbol-placement': 'line',
        'text-font': ['Arial Unicode MS Bold'],
        'text-pitch-alignment': 'viewport',
        'symbol-spacing': 500,
        'text-rotation-alignment': 'map',
        'text-size': 12,
        'icon-rotation-alignment': 'viewport'
      },
      'paint': {
        'text-color': 'rgba(65, 65, 65, 1)',
        'text-halo-width': 2,
        'text-halo-color': 'rgba(255, 255, 255, 1)'
      },
      labelLayerId: 'GVEGPL'
    },
    // POI 点
    {
      id: '11L_POI_YIYUAN', // 医院
      type: 'symbol',
      source: CONFIG.addLv11,
      'source-layer': 'SD_POI_LEVEL9_1009',
      filter: ['all', ['>=', 'KIND', '170100'],
        ['<=', 'KIND', '170105']
      ],
      'layout': {
        'text-field': '{NAME}',
        'visibility': 'visible',
        'symbol-placement': 'point',
        'text-size': 11,
        'text-padding': 4,
        'icon-image': 'ic_map_yiyuan',
        'text-justify': 'left',
        'text-anchor': 'left',
        'text-offset': [0.8, 0],
        'text-font': ['Arial Unicode MS Blod', 'Open Sans Regular'],
        'text-pitch-alignment': 'viewport',
        'text-rotation-alignment': 'viewport',
        'icon-rotation-alignment': 'viewport'
      },
      'paint': {
        'text-color': 'rgba(65, 65, 65, 1)',
        'text-halo-width': 2,
        'text-halo-color': 'rgba(255, 255, 255, 1)'
      }
    },
    // {
    //   id: '11L_POI_HOSPITAL', // 医院，卫生所
    //   type: 'symbol',
    //   source: CONFIG.addLv11,
    //   'source-layer': 'SD_POI_LEVEL9_1009',
    //   filter: ['any',
    //     ['all', ['>=', 'KIND', '170106'],
    //       ['<=', 'KIND', '170110']
    //     ],
    //     ['==', 'KIND', '210105']
    //   ],
    //   'layout': {
    //     'text-field': '{NAME}',
    //     'visibility': 'visible',
    //     'symbol-placement': 'point',
    //     'text-size': 11,
    //     'text-padding': 4,
    //     'icon-image': 'ic_map_hospital',
    //     'text-justify': 'left',
    //     'text-anchor': 'left',
    //     'text-offset': [0.8, 0],
    //     'text-font': ['Arial Unicode MS Blod', 'Open Sans Regular'],
    //     'text-pitch-alignment': 'viewport',
    //     'text-rotation-alignment': 'viewport',
    //     'icon-rotation-alignment': 'viewport'
    //   },
    //   'paint': {
    //     'text-color': 'rgba(65, 65, 65, 1)',
    //     'text-halo-width': 2,
    //     'text-halo-color': 'rgba(255, 255, 255, 1)'
    //   }
    // },
    {
      id: '11L_POI_PARK', // 公园
      type: 'symbol',
      source: CONFIG.addLv11,
      'source-layer': 'SD_POI_LEVEL9_1009', // py是面
      filter: ['all', ['>=', 'KIND', '180301'],
        ['<=', 'KIND', '180400']
      ],
      'layout': {
        'text-field': '{NAME}',
        'visibility': 'visible',
        'symbol-placement': 'point',
        'text-size': 11,
        'text-padding': 4,
        'icon-image': 'ic_map_park',
        'text-justify': 'left',
        'text-anchor': 'left',
        'text-offset': [0.5, 0],
        'text-font': ['Arial Unicode MS Blod', 'Open Sans Regular'],
        'text-pitch-alignment': 'viewport',
        'text-rotation-alignment': 'viewport',
        'icon-rotation-alignment': 'viewport'
      },
      'paint': {
        'text-color': 'rgba(65, 65, 65, 1)',
        'text-halo-width': 2,
        'text-halo-color': 'rgba(255, 255, 255, 1)'
      }
    }
  ]
};


export default function (map) {
  if (map.getZoom() >= _visibleLevel && !map.getSource(CONFIG.addLv11)) {
    const source = style.source;
    const layers = style.layers;
    for (let key in source) {
      map.addSource(key, source[key]);
    }
    for (let item of layers) {
      map.addLayer(item, item.labelLayerId);
    }
  }
}