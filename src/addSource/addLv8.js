/**
 * @author sl 2019-01-02
 * 8级的时候只显示 区级政府机关(190104)，县级政府机关(190105)，省/直辖市/自治区政府(190107)，市县政府(190108)
 * 10级的时候显示所有数据
 * todo 图标没换 icon-image
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
        'source-layer': '8L_POI', // py是面
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