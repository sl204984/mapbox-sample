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
      })
      .addLayer({
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
      })
      .addLayer({
        id: 'GRESPL_1_3D', // 建筑物图层（高度统计的是H字段，不确定是不是此字段）
        source: CONFIG.addLv15,
        'source-layer': 'SD_GRESPL_1', // py是面
        type: 'fill-extrusion',
        'minzoom': _visibleLevel,
        paint: {
          'fill-extrusion-color': '#aaa',

          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
            "interpolate", ["linear"],
            ["zoom"],
            15, 0,
            15.05, ["get", "height"]
          ],
          'fill-extrusion-base': [
            "interpolate", ["linear"],
            ["zoom"],
            15, 0,
            15.05, ["get", "min_height"]
          ],

        }
      })
      .addLayer({
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
      })
      .addLayer({
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
      .addLayer({
        id: 'GRFCPL', // 记录了一些公司，养殖场，墓地等区域
        type: 'fill',
        source: 'composite',
        'source-layer': 'SD_GRFCPL', // py是面
        layout: {},
        paint: {
          'fill-color': '#CACFD2',
          'fill-antialias': false
        }
      })


      /**
       * 线
       */
      // .addLayer({
      //   id: 'SD_GHFCLN', // 记录了河流，黄河，隧道等的边界
      //   type: 'symbol',
      //   source: CONFIG.addLv15,
      //   'source-layer': 'SD_GHFCLN', // LN，line的简写
      //   layout: {
      //     'text-field': '{NAME}',
      //     'visibility': 'visible',
      //     'symbol-placement': 'point',
      //     'text-size': 11,
      //     'text-padding': 4,
      //     'icon-image': 'btn_bubble_a_normal',
      //     'text-justify': 'left',
      //     'text-anchor': 'left',
      //     'text-offset': [0.5, 0],
      //     'text-font': ['Arial Unicode MS Blod', 'Open Sans Regular'],
      //     'text-pitch-alignment': 'viewport',
      //     'text-rotation-alignment': 'viewport',
      //     'icon-rotation-alignment': 'viewport'
      //   },
      //   paint: {
      //     'text-color': '#737517',
      //     'text-halo-width': 2,
      //     'text-halo-color': 'rgba(255, 255, 255, 1)'
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
          'text-color': '#2E7EAF',
          'text-halo-width': 2,
          'text-halo-color': 'rgba(255, 255, 255, 1)'
        }
      })
      // .addLayer({
      //   id: 'SD_GRFCLN', // 记录了长城岭，养殖场等 =====>  NAME 属性为空，暂时注释了
      //   type: 'symbol',
      //   source: CONFIG.addLv15,
      //   'source-layer': 'SD_GRFCLN', // LN，line的简写
      //   layout: {
      //     'text-field': '{NAME}',
      //     'visibility': 'visible',
      //     'symbol-placement': 'point',
      //     'text-size': 11,
      //     'text-padding': 4,
      //     'icon-image': 'btn_bubble_a_normal',
      //     'text-justify': 'left',
      //     'text-anchor': 'left',
      //     'text-offset': [0.5, 0],
      //     'text-font': ['Arial Unicode MS Blod', 'Open Sans Regular'],
      //     'text-pitch-alignment': 'viewport',
      //     'text-rotation-alignment': 'viewport',
      //     'icon-rotation-alignment': 'viewport'
      //   },
      //   paint: {
      //     'text-color': '#737517',
      //     'text-halo-width': 2,
      //     'text-halo-color': 'rgba(255, 255, 255, 1)'
      //   }
      // })
      // .addLayer({
      //   id: 'SD_GTFCLN', // 记录了XX桥，XX通道  ==========> 没有 NAME
      //   type: 'symbol',
      //   source: CONFIG.addLv15,
      //   'source-layer': 'SD_GTFCLN', // LN，line的简写
      //   layout: {
      //     'text-field': '{NAME}',
      //     'visibility': 'visible',
      //     'symbol-placement': 'point',
      //     'text-size': 11,
      //     'text-padding': 4,
      //     'icon-image': 'btn_bubble_a_normal',
      //     'text-justify': 'left',
      //     'text-anchor': 'left',
      //     'text-offset': [0.5, 0],
      //     'text-font': ['Arial Unicode MS Blod', 'Open Sans Regular'],
      //     'text-pitch-alignment': 'viewport',
      //     'text-rotation-alignment': 'viewport',
      //     'icon-rotation-alignment': 'viewport'
      //   },
      //   paint: {
      //     'text-color': '#737517',
      //     'text-halo-width': 2,
      //     'text-halo-color': 'rgba(255, 255, 255, 1)'
      //   }
      // })
      .addLayer({
        id: 'SD_GROALN', // 路网图层（name字段）
        type: 'line',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GROALN', // LN，line的简写
        layout: {
          'line-cap': 'round',
          'line-join': 'round',
        },
        paint: {
          'line-width': {
            'base': 1.5,
            'stops': [
              [9, 2],
              [18, 4]
            ]
          },
          'line-color': '#fECE70',
        }
      })
      .addLayer({
        id: 'SD_GROALN_NAME', // 记录了一些线性的水渠、河沟 不显示  ======> 不显示是不是不妥
        type: 'symbol',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GROALN', // LN，line的简写
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
          'text-color': '#2E7EAF',
          'text-halo-width': 2,
          'text-halo-color': 'rgba(255, 255, 255, 1)'
        }
      })

      /**
       * 点
       */
      .addLayer({
        id: 'SD_GHFCPT', // 此图层记录了一些水站和XX闸
        type: 'symbol',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GHFCPT',
        layout: {
          'text-field': '{NAME}',
          'visibility': 'visible',
          'symbol-placement': 'point',
          'text-size': 11,
          'text-padding': 4,
          'icon-image': 'btn_bubble_a_normal',
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
      })
      // .addLayer({
      //   id: 'GHYDPT', // 记录一些井和XX泉  =======> 貌似没有数据 不对，是 NAME 属性为空，但是数据还是有的
      //   type: 'symbol',
      //   source: CONFIG.addLv15,
      //   'source-layer': 'SD_GHYDPT',
      //   layout: {
      //     'text-field': '{NAME}',
      //     'visibility': 'visible',
      //     'symbol-placement': 'point',
      //     'text-size': 11,
      //     'text-padding': 4,
      //     'icon-image': 'btn_bubble_a_normal',
      //     'text-justify': 'left',
      //     'text-anchor': 'left',
      //     'text-offset': [0.5, 0],
      //     'text-font': ['Arial Unicode MS Blod', 'Open Sans Regular'],
      //     'text-pitch-alignment': 'viewport',
      //     'text-rotation-alignment': 'viewport',
      //     'icon-rotation-alignment': 'viewport'
      //   },
      //   paint: {
      //     'text-color': '#737517',
      //     'text-halo-width': 2,
      //     'text-halo-color': 'rgba(255, 255, 255, 1)'
      //   }
      // })
      .addLayer({
        id: 'GNPNPT', // 记录了XX山和水库
        type: 'symbol',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GNPNPT',
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
          'text-rotation-alignment': 'viewport'
        },
        paint: {
          'text-color': '#409FD8',
          'text-halo-width': 2,
          'text-halo-color': 'rgba(255, 255, 255, 1)'
        }
      })
      // .addLayer({
      //   id: 'SD_GRFCPT', // 记录了一些学校，自来水厂，服务站，输油站，液化气站，遗址，陵墓，寺庙，游乐场等  ======> NAME属性为空
      //   type: 'symbol',
      //   source: CONFIG.addLv15,
      //   'source-layer': 'SD_GRFCPT',
      //   layout: {
      //     'text-field': '{NAME}',
      //     'visibility': 'visible',
      //     'symbol-placement': 'point',
      //     'text-size': 11,
      //     'text-padding': 4,
      //     'icon-image': 'btn_bubble_a_normal',
      //     'text-justify': 'left',
      //     'text-anchor': 'left',
      //     'text-offset': [0.5, 0],
      //     'text-font': ['Arial Unicode MS Blod', 'Open Sans Regular'],
      //     'text-pitch-alignment': 'viewport',
      //     'text-rotation-alignment': 'viewport',
      //     'icon-rotation-alignment': 'viewport'
      //   },
      //   paint: {
      //     'text-color': '#737517',
      //     'text-halo-width': 2,
      //     'text-halo-color': 'rgba(255, 255, 255, 1)'
      //   }
      // })
      // .addLayer({
      //   id: 'GTFCPT', // 记录了一些学校，自来水厂，服务站，输油站，液化气站，遗址，陵墓，寺庙，游乐场等   =======> 没有名称属性 NAME
      //   type: 'symbol',
      //   source: CONFIG.addLv15,
      //   'source-layer': 'SD_GTFCPT',
      //   layout: {
      //     'text-field': '{NAME}',
      //     'visibility': 'visible',
      //     'symbol-placement': 'point',
      //     'text-size': 11,
      //     'text-padding': 4,
      //     'icon-image': 'btn_bubble_a_normal',
      //     'text-justify': 'left',
      //     'text-anchor': 'left',
      //     'text-offset': [0.5, 0],
      //     'text-font': ['Arial Unicode MS Blod', 'Open Sans Regular'],
      //     'text-pitch-alignment': 'viewport',
      //     'text-rotation-alignment': 'viewport',
      //     'icon-rotation-alignment': 'viewport'
      //   },
      //   paint: {
      //     'text-color': '#737517',
      //     'text-halo-width': 2,
      //     'text-halo-color': 'rgba(255, 255, 255, 1)'
      //   }
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
      })
      .addLayer({
        id: 'OTH_POI',
        type: 'symbol',
        source: CONFIG.addLv15,
        'source-layer': 'OTH_POI', // py是面
        'layout': {
          'text-field': '{newname}',
          'visibility': 'visible',
          'symbol-placement': 'point',
          'text-size': 11,
          'text-padding': 4,
          // 'icon-image': 'btn_bubble_a_normal',
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

    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
        labelLayerId = layers[i].id;
        break;
      }
    }
    map.addLayer({
      'id': '3d-buildings',
      source: CONFIG.addLv15,
      'source-layer': 'SD_GRESPL_1',
      // 'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        'fill-extrusion-color': '#aaa',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': 30,
        'fill-extrusion-base': [
          "interpolate", ["linear"],
          ["zoom"],
          15, 0,
          15.05, ["get", "min_height"]
        ],
        'fill-extrusion-opacity': .6
      }
    }, labelLayerId);
  }
}