/**
 * @author sl 2019-01-02
 * 11级，包括公园，医院
 */
import CONFIG from '../config';

const _visibleLevel = 11;

export default function (map) {
  if (map.getZoom() >= _visibleLevel && !map.getSource(CONFIG.addLv11)) {
    map.addSource(CONFIG.addLv11, {
        type: 'vector',
        scheme: 'tms',
        tiles: [
          'http://116.62.186.152:8080/geoserver/gwc/service/tms/1.0.0/SDWorkSpace%3ASD_11L@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf'
        ],
        minzoom: _visibleLevel
      })
      .addLayer({
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
      })
      // .addLayer({
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
      // })
      .addLayer({
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
      });
  }
}