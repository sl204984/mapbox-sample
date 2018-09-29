/**
 * @author sl 2019-01-02
 */
import CONFIG from '../config';

const _visibleLevel = 8;

export default function (map) {
  if (map.getZoom() >= _visibleLevel && !map.getSource(CONFIG.addLv8)) {
    map.addSource(CONFIG.addLv8, {
      type: 'vector',
      scheme: 'tms',
      tiles: [
        'http://116.62.186.152:8080/geoserver/gwc/service/tms/1.0.0/SDWorkSpace%3ASD_8L@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf'
      ],
      minzoom: _visibleLevel
    }).addLayer({
      id: '8L_POI', // 建筑物图层（高度统计的是H字段，不确定是不是此字段）
      type: 'symbol',
      source: CONFIG.addLv8,
      'source-layer': '8L_POI', // py是面
      'layout': {
        'text-field': '{newname}',
        'visibility': 'visible',
        'symbol-placement': 'point',
        'text-size': 12,
        'icon-image': '县级市',
        'icon-text-fit': 'both',
        'icon-text-fit-padding': [2, 2, 2, 2],
        'text-justify': 'center',
        'text-font': ['黑体'],
        'text-pitch-alignment': 'viewport',
        'text-rotation-alignment': 'viewport',
        'icon-rotation-alignment': 'viewport',
        'text-anchor': 'center',
        'text-keep-upright': false
      },
      'paint': {
        'text-color': '#000000'
      }
    });
  }
}