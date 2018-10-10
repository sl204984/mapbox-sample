/**
 * @author sl 2019-01-02
 */
import CONFIG from '../config';

const _visibleLevel = 9;

export default function (map) {
  if (map.getZoom() >= _visibleLevel && !map.getSource(CONFIG.addLv9)) {
    map.addSource(CONFIG.addLv9, {
      type: 'vector',
      scheme: 'tms',
      tiles: [
        'http://116.62.186.152:8080/geoserver/gwc/service/tms/1.0.0/SDWorkSpace%3ASD_9L@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf'
      ],
      minzoom: _visibleLevel
    }).addLayer({
      id: 'SD_POI_LEVEL9_1009',
      type: 'symbol',
      source: CONFIG.addLv9,
      'source-layer': 'SD_POI_LEVEL9_1009', // py是面
      'layout': {
        'text-field': '{NAME}',
        'visibility': 'visible',
        'symbol-placement': 'point',
        'text-size': 11,
        'text-padding': 4,
        'icon-image': 'ic_map_other_cities',
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