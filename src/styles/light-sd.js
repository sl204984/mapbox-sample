/**
 * @author sl
 * 更换服务器：style.sources.tiles[0] 更换内容
 * 以山东省数据为例
 * host:port/geoserver/gwc/service/tms/1.0.0/SDWorkSpace%3ASD_7L@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf
 * 1. ip + host
 * 2. SDWorkSpace ---> 对应的空间名称
 * 3. 3ASD_7L ----> 对应的图层名称
 * 4. z ----> 缩放等级
 * 5. x, y ----> 对应的瓦片
 * 
 * 显示规则：
 * 面在最底层，其次是线，其次是点；居民区在绿地上面，绿地在水系面上面
 * 
 * todolist 
 * 1. 国道、省道路牌问题
 * 2. 路网图层锯齿 -------> 分级别显示，看上去没这么密，就算解决了
 * 3. 政府两字没去掉
 */

const _visibleLevel = 7;
const _sdVisibleLevel = 9; // 省道
const _ditchVisibleLevel = 12; // 沟和渠道

const layers = [{
    id: 'background', // 背景
    type: 'background',
    layout: {},
    paint: {
      'background-color': 'hsl(55, 11%, 96%)'
    }
  },
  // 面

  {
    id: 'GHYDPL_7L', // 记录了一些水渠、河沟，水库的面状要素
    type: 'fill',
    source: 'composite',
    'source-layer': 'SD_GHYDPL', // py是面
    filter: ['any',
      ['==', 'CLASID', '210200'],
      ['==', 'CLASID', '230101'],
      ['==', 'CLASID', '240101']
    ],
    layout: {},
    paint: {
      'fill-color': '#abc5ef',
      'fill-opacity': 1,
      'fill-antialias': false
    }
  },
  {
    id: 'GHYDPL_OTH', // 记录了一些水渠、河沟，水库的面状要素
    type: 'fill',
    source: 'composite',
    'source-layer': 'SD_GHYDPL', // py是面
    filter: ['all',
      ['!=', 'CLASID', '210200'],
      ['!=', 'CLASID', '230101'],
      ['!=', 'CLASID', '240101']
    ],
    minzoom: _ditchVisibleLevel,
    layout: {},
    paint: {
      'fill-color': '#abc5ef',
      'fill-opacity': 1,
      'fill-antialias': false
    }
  },
  {
    id: 'GVEGPL', // 记录了绿地
    type: 'fill',
    source: 'composite',
    'source-layer': 'SD_GVEGPL', // py是面
    layout: {},
    paint: {
      'fill-color': '#BBD98D',
      'fill-opacity': 0.5,
      'fill-antialias': false
    }
  },
  // 线
  {
    id: 'GBOULN', // 记录了各个镇的边界，有名字的记录的是省界和岛屿（name不为空）
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GBOULN', // LN，line的简写
    filter: ['any',
      ['==', 'CLASID', '640201'],
      ['==', 'CLASID', '250100']
    ],
    layout: {
      'line-cap': 'round',
      'line-join': 'round'
    },
    paint: {
      'line-width': 1,
      'line-color': '#BBBBBB',
      'line-offset': 0
    }
  },
  {
    id: 'GRAILN_bg', // 记录了铁路，底层颜色灰色
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GRAILN', // LN，line的简写
    minzoom: 7,
    layout: {
      'line-cap': 'round',
      'line-join': 'round',
    },
    paint: {
      'line-color': '#B6B3B7',
      'line-width': 2.4
    }
  }, {
    id: 'GRAILN', // 记录了铁路，间隔白色
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GRAILN', // LN，line的简写
    minzoom: 7,
    layout: {
      'line-cap': 'round',
      'line-join': 'round'
    },
    paint: {
      'line-color': '#FFFFFF',
      'line-dasharray': [5, 5],
      'line-width': 1.6
    }
  },

  {
    id: 'GS_GROALN_SD_bg', // 路网图层（name字段），底部图层，充当描边作用，省道
    type: 'line',
    source: 'composite',
    'source-layer': 'GS_GROALN', // LN，line的简写
    filter: ['all',
      ['!=', 'CLASID', '420101'],
      ['!=', 'CLASID', '420102']
    ],
    minzoom: _sdVisibleLevel,
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
      'line-color': '#D6B95A'
    }
  }, {
    id: 'GS_GROALN_SD', // 路网图层（name字段），省道
    type: 'line',
    source: 'composite',
    'source-layer': 'GS_GROALN', // 路网图层，国道和省道
    filter: ['all',
      ['!=', 'CLASID', '420101'],
      ['!=', 'CLASID', '420102']
    ],
    minzoom: _sdVisibleLevel,
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
      'line-color': '#FEEB82'
    }
  },
  {
    id: 'GS_GROALN_SD_NAME', // 省道名称
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['all',
      ['!=', 'CLASID', '420101'],
      ['!=', 'CLASID', '420102']
    ],
    minzoom: _sdVisibleLevel,
    layout: {
      'text-field': '{NAME}',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-font': ['Arial Unicode MS Bold'],
      'text-pitch-alignment': 'viewport',
      'symbol-spacing': 500,
      'text-rotation-alignment': 'map',
      'text-size': 12,
      'icon-rotation-alignment': 'viewport'
    },
    'paint': {
      'text-color': 'rgba(65, 65, 65, 1)',
      'text-halo-width': 2,
      'text-halo-color': 'rgba(255, 255, 255, 1)'
    }
  },

  {
    id: 'GS_GROALN_GD_bg', // 路网图层（name字段），底部图层，充当描边作用，国道
    type: 'line',
    source: 'composite',
    'source-layer': 'GS_GROALN', // LN，line的简写
    filter: ['any',
      ['==', 'CLASID', '420101'],
      ['==', 'CLASID', '420102']
    ],
    minzoom: _visibleLevel,
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
      'line-color': '#B06237'
    }
  }, {
    id: 'GS_GROALN_GD', // 路网图层（name字段），国道
    type: 'line',
    source: 'composite',
    'source-layer': 'GS_GROALN', // 路网图层，国道和省道
    filter: ['any',
      ['==', 'CLASID', '420101'],
      ['==', 'CLASID', '420102']
    ],
    minzoom: _visibleLevel,
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
      'line-color': '#FECD6E'
    }
  },
  {
    id: 'GS_GROALN_GD_NAME', // 国道名称
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['any',
      ['==', 'CLASID', '420101'],
      ['==', 'CLASID', '420102']
    ],
    minzoom: _sdVisibleLevel,
    layout: {
      'text-field': '{NAME}',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-font': ['Arial Unicode MS Bold'],
      'text-pitch-alignment': 'viewport',
      'symbol-spacing': 500,
      'text-rotation-alignment': 'map',
      'text-size': 12,
      'icon-rotation-alignment': 'viewport'
    },
    paint: {
      'text-color': 'rgba(65, 65, 65, 1)',
      'text-halo-width': 2,
      'text-halo-color': 'rgba(255, 255, 255, 1)',
    }
  },
  /*********************
   * 后面要删除
   *********************/
  {
    id: 'GS_GROALN_GD_NAME_QDSJZ', // 国道名称 青岛-石家庄
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['==', 'NAME', '青岛-石家庄'],
    minzoom: _visibleLevel,
    layout: {
      'text-field': 'G308',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': 'ic_map_brown_bg', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 6, 2, 6],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    paint: {
      'text-color': '#FFFFFF'
    }
  },
  {
    id: 'GS_GROALN_GD_NAME_SHGSZ', // 国道名称， 山海关-深圳
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['==', 'NAME', '山海关-深圳'],
    minzoom: _visibleLevel,
    layout: {
      'text-field': 'G205',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': 'ic_map_brown_bg', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 6, 2, 6],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    paint: {
      'text-color': '#FFFFFF'
    }
  },

  {
    id: 'GS_GROALN_GD_NAME_LYGHZ', // 国道名称， 连云港-菏泽
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['==', 'NAME', '连云港-菏泽'],
    minzoom: _visibleLevel,
    layout: {
      'text-field': 'G327',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': 'ic_map_brown_bg', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 6, 2, 6],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    paint: {
      'text-color': '#FFFFFF'
    }
  },

  {
    id: 'GS_GROALN_GD_NAME_YTST', // 国道名称， 烟台-汕头
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['==', 'NAME', '烟台-汕头'],
    minzoom: _visibleLevel,
    layout: {
      'text-field': 'G206',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': 'ic_map_brown_bg', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 6, 2, 6],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    paint: {
      'text-color': '#FFFFFF'
    }
  },

  {
    id: 'GS_GROALN_GD_NAME_QDLZGSGL', // 国道名称， 青岛-兰州高速公路
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['==', 'NAME', '青岛-兰州高速公路'],
    minzoom: _visibleLevel,
    layout: {
      'text-field': 'G22',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': 'ic_map_brown_bg', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 6, 2, 6],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    paint: {
      'text-color': '#FFFFFF'
    }
  },

  {
    id: 'GS_GROALN_GD_NAME_CCSZGSGL', // 国道名称， 长春-深圳高速公路
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['==', 'NAME', '长春-深圳高速公路'],
    minzoom: _visibleLevel,
    layout: {
      'text-field': 'G25',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': 'ic_map_brown_bg', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 6, 2, 6],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    paint: {
      'text-color': '#FFFFFF'
    }
  },

  {
    id: 'GS_GROALN_GD_NAME_RZLKGSGL', // 国道名称， 日照-兰考高速公路
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['==', 'NAME', '日照-兰考高速公路'],
    minzoom: _visibleLevel,
    layout: {
      'text-field': 'G1511',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': 'ic_map_brown_bg', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 6, 2, 6],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    paint: {
      'text-color': '#FFFFFF'
    }
  },

  {
    id: 'GS_GROALN_GD_NAME_BJSHGSGL', // 国道名称， 北京-上海高速公路
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['==', 'NAME', '北京-上海高速公路'],
    minzoom: _visibleLevel,
    layout: {
      'text-field': 'G2',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': 'ic_map_brown_bg', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 6, 2, 6],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    paint: {
      'text-color': '#FFFFFF'
    }
  },

  {
    id: 'GS_GROALN_GD_NAME_BJZH', // 国道名称， 北京-珠海
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['==', 'NAME', '北京-珠海'],
    minzoom: _visibleLevel,
    layout: {
      'text-field': 'G105',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': 'ic_map_brown_bg', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 6, 2, 6],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    paint: {
      'text-color': '#FFFFFF'
    }
  },

  {
    id: 'GS_GROALN_GD_NAME_RCLZ', // 国道名称， 荣成-兰州
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['==', 'NAME', '荣成-兰州'],
    minzoom: _visibleLevel,
    layout: {
      'text-field': 'G309',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': 'ic_map_brown_bg', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 6, 2, 6],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    paint: {
      'text-color': '#FFFFFF'
    }
  },


  /****************************
   * 删除部分
   *****************************/

  // 点
  {
    id: 'SD_POI_LEVEL7_1009', // POI图层
    type: 'symbol',
    source: 'composite',
    'source-layer': 'SD_POI_LEVEL7_1009',
    minzoom: _visibleLevel,
    'layout': {
      'text-field': {
        'stops': [
          [7, '{NAME}'],
          // [14, '{NAME}人民政府']
        ]
      },
      'visibility': 'visible',
      'symbol-placement': 'point',
      'text-size': 16,
      'text-padding': 4,
      'icon-image': 'ic_map_zhengfu',
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
  }
];

export default {
  version: 8,
  name: 'Mapbox',
  metadata: {},
  sources: {
    composite: {
      type: 'vector',
      scheme: 'tms',
      tiles: [
        'http://116.62.186.152:8080/geoserver/gwc/service/tms/1.0.0/SDWorkSpace%3ASD_7L@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf'
      ]
    }
  },
  sprite: 'http://116.62.186.152:12808/sprite/sprite',
  glyphs: 'http://47.97.24.100:8899/fonts/{fontstack}/{range}.pbf',
  visibility: 'public',
  layers
};