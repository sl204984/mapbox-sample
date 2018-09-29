/**
 * @author sl 2019-01-02
 */
import CONFIG from '../config';

const _visibleLevel = 15;

export default function (map) {
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
       * 线
       */
      // .addLayer({
      //   id: 'GHFCLN', // 记录了河流，黄河，隧道等的边界
      //   type: 'line',
      //   source: CONFIG.addLv15,
      //   'source-layer': 'SD_GHFCLN', // LN，line的简写
      //   minzoom: 10,
      //   layout: {
      //     'line-cap': 'round',
      //     'line-join': 'round'
      //   },
      //   paint: {
      //     'line-width': 1,
      //     'line-color': '#009797',
      //     'line-offset': 0
      //   }
      // })
      .addLayer({
        id: 'SD_GHYDLN', // 记录了一些线性的水渠、河沟 不显示  ======> 不显示是不是不妥
        type: 'symbol',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GHYDLN', // LN，line的简写
        layout: {
          'text-field': '{NAME}',
          'visibility': 'visible',
          'symbol-placement': 'point',
          'text-size': 11,
          'text-padding': 4,
          'text-justify': 'left',
          'text-anchor': 'left',
          'text-offset': [0.5, 0],
          'text-font': ['Arial Unicode MS Blod', 'Open Sans Regular'],
          'text-pitch-alignment': 'viewport',
          'text-rotation-alignment': 'viewport',
        },
        paint: {
          'text-color': '#409FD8',
          'text-halo-width': 2,
          'text-halo-color': 'rgba(255, 255, 255, 1)'
        }
      })
      /**
       * 点
       */
      // .addLayer({
      //   id: 'GHFCPT', // 此图层记录了一些水站和XX闸
      //   type: 'symbol',
      //   source: 'composite',
      //   'source-layer': 'SD_GHFCPT',
      //   layout: {}
      // })
      .addLayer({
        id: 'SD_GAGNPT', // 此图层记录了村庄POI
        type: 'symbol',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GAGNPT',
        layout: {
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
        paint: {
          'text-color': '#737517',
          'text-halo-width': 2,
          'text-halo-color': 'rgba(255, 255, 255, 1)'
        }
      });
  }
}