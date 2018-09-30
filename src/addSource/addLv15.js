/**
 * @author sl 2019-01-02
 * todolist 路网图层CLASID不对，覆盖之前的国道，无法通过CLASID区分和过滤
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
        id: 'SD_GROALN_bg', // 路网图层（name字段），底部图层，充当描边
        type: 'line',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GROALN',
        filter: ['>=', 'CLASID', '420301'],
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
          'line-color': '#5E37AA'
        }
      })
      .addLayer({
        id: 'SD_GROALN', // 路网图层（name字段），国道
        type: 'line',
        type: 'line',
        source: CONFIG.addLv15,
        filter: ['>=', 'CLASID', '420301'],
        'source-layer': 'SD_GROALN',
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
          'line-color': '#BA92F1'
        }
      })
      .addLayer({
        id: 'SD_GROALN_NAME',
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
      // .addLayer({
      //   id: 'SD_GHFCPT', // 此图层记录了一些水站和XX闸
      //   type: 'symbol',
      //   source: CONFIG.addLv15,
      //   'source-layer': 'SD_GHFCPT',
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

    // 增加 3d 建筑
    const layers = map.getStyle().layers;

    let labelLayerId = 'OTH_POI';

    map.addLayer({
        'id': 'GRESPL_1_3D',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GRESPL_1',
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
      }, labelLayerId)
      .addLayer({
        'id': 'GRESPL_2_3D',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GRESPL_2',
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': 30,
          'fill-extrusion-base': [
            "interpolate", ["linear"],
            ["zoom"],
            15, 0,
            15.05, ["get", "min_height"]
          ],
          'fill-extrusion-opacity': .6
        }
      }, labelLayerId)
      .addLayer({
        'id': 'GRESPL_3_3D',
        source: CONFIG.addLv15,
        'source-layer': 'SD_GRESPL_3',
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
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