/**
 * @author sl 2019-01-02
 * 8级的时候只显示 区级政府机关(190104)，县级政府机关(190105)，省/直辖市/自治区政府(190107)，市县政府(190108)
 * 10级的时候显示所有数据
 * todolist 
 * 1. 图标没换 icon-image
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
      })
      .addLayer({
        id: '8L_POI',
        type: 'symbol',
        source: CONFIG.addLv8,
        'source-layer': '8L_POI',
        minzoom: 10,
        filter: ['all',
          ['!=', 'KIND', '190104'],
          ['!=', 'KIND', '190105'],
          ['!=', 'KIND', '190107'],
          ['!=', 'KIND', '190108'],
        ],
        'layout': {
          'text-field': '{newname}',
          'visibility': 'visible',
          'symbol-placement': 'point',
          'text-size': 12,
          // 'icon-image': 'ic_map_gray_bg',
          'icon-text-fit': 'both',
          'icon-text-fit-padding': [2, 4, 2, 4],
          'text-justify': 'center',
          'text-font': ['黑体'],
          'text-pitch-alignment': 'viewport',
          'text-rotation-alignment': 'viewport',
          'icon-rotation-alignment': 'viewport',
          'text-anchor': 'center',
          'text-keep-upright': false
        },
        'paint': {
          'text-color': '#8c9c99',
          'text-halo-width': 2,
          'text-halo-color': 'rgba(255, 255, 255, 1)'
        }
      })
      .addLayer({
        id: '8L_POI_QX',
        type: 'symbol',
        source: CONFIG.addLv8,
        'source-layer': '8L_POI', // py是面
        filter: ['any',
          ['==', 'KIND', '190104'],
          ['==', 'KIND', '190105'],
          ['==', 'KIND', '190107'],
          ['==', 'KIND', '190108'],
        ],
        'layout': {
          'text-field': '{newname}',
          'visibility': 'visible',
          'symbol-placement': 'point',
          'text-size': 12,
          // 'icon-image': 'ic_map_gray_bg',
          'icon-text-fit': 'both',
          'icon-text-fit-padding': [2, 4, 2, 4],
          'text-justify': 'center',
          'text-font': ['黑体'],
          'text-pitch-alignment': 'viewport',
          'text-rotation-alignment': 'viewport',
          'icon-rotation-alignment': 'viewport',
          'text-anchor': 'center',
          'text-keep-upright': false
        },
        'paint': {
          'text-color': '#8c9c99',
          'text-halo-width': 2,
          'text-halo-color': 'rgba(255, 255, 255, 1)'
        }
      });
  }
}