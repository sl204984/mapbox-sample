/**
 * @author sl 2019-01-02
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
    }).addLayer({
      id: '11L_POI', // 建筑物图层（高度统计的是H字段，不确定是不是此字段）
      type: 'symbol',
      source: CONFIG.addLv11,
      'source-layer': '11L_POI', // py是面
      'layout': {
        'text-field': '{newname}',
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