/**
 * @author sl 2019-01-02
 */
import CONFIG from '../config';

export default function (map) {
  const _visibleLevel = 15;
  if (map.getZoom() >= _visibleLevel && !map.getSource(CONFIG.addLv15)) {
    map.addSource(CONFIG.addLv15, {
        type: 'vector',
        scheme: 'tms',
        tiles: [
          'http://116.62.186.152:8080/geoserver/gwc/service/tms/1.0.0/SDWorkSpace%3ASDLayers@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf'
        ],
        minzoom: _visibleLevel
      }).addLayer({
        id: 'GRESPL_1', // 建筑物图层（高度统计的是H字段，不确定是不是此字段）
        type: 'fill',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GRESPL_1', // py是面
        layout: {},
        paint: {
          'fill-color': '#CACFD2',
          'fill-opacity': 1,
          'fill-antialias': false
        }
      }).addLayer({
        id: 'GRESPL_2', // 建筑物图层（高度统计的是H字段，不确定是不是此字段）
        type: 'fill',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GRESPL_2', // py是面
        layout: {},
        paint: {
          'fill-color': '#CACFD2',
          'fill-opacity': 1,
          'fill-antialias': false
        }
      }).addLayer({
        id: 'GRESPL_3', // 建筑物图层（高度统计的是H字段，不确定是不是此字段）
        type: 'fill',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GRESPL_3', // py是面
        layout: {},
        paint: {
          'fill-color': '#CACFD2',
          'fill-opacity': 1,
          'fill-antialias': false
        }
      })
      /**
       * 点
       */
      .addLayer({
        id: 'SD_GAGNPT', // 此图层记录了村庄POI
        type: 'symbol',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GAGNPT',
        layout: {
          'text-field': '{name}',
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
        paint: {
          'text-color': 'rgba(65, 65, 65, 1)',
          'text-halo-width': 2,
          'text-halo-color': 'rgba(255, 255, 255, 1)'
        }
      });
  }
}