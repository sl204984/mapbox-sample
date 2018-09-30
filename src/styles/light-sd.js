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
 * 1. 铁路不见了
 * 2. 路网图层锯齿 -------> 分级别显示，看上去没这么密，就算解决了
 * 3. 政府两字没去掉
 * 4. 国道、省道名称问题
 */

const _visibleLevel = 7;
const _sdVisibleLevel = 9; // 省道

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
    id: 'GHYDPL', // 记录了一些水渠、河沟，水库的面状要素
    type: 'fill',
    source: 'composite',
    'source-layer': 'SD_GHYDPL', // py是面
    layout: {},
    paint: {
      'fill-color': '#85C1E9',
      'fill-opacity': 1,
      'fill-antialias': false
    }
  }, {
    id: 'GVEGPL', // 记录了绿地
    type: 'fill',
    source: 'composite',
    'source-layer': 'SD_GVEGPL', // py是面
    layout: {},
    paint: {
      'fill-color': '#bbd98d',
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
    filter: ['any', ['==', 'CLASID', '640201'],
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
  }, {
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
  }, {
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
    id: 'GS_GROALN_GD_NAME', // 省道名称
    type: 'symbol',
    source: 'composite',
    'source-layer': 'GS_GROALN',
    filter: ['all',
      ['!=', 'CLASID', '420101'],
      ['!=', 'CLASID', '420102']
    ],
    minzoom: _sdVisibleLevel,
    'layout': {
      'text-field': '{NAME}',
      'visibility': 'visible',
      'symbol-placement': 'line-center',
      'text-size': 12,
      'icon-image': '县级市', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 2, 2, 2],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
    },
    'paint': {
      'text-color': 'rgba(65, 65, 65, 1)',
      'text-halo-width': 2,
      'text-halo-color': 'rgba(255, 255, 255, 1)',

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
    'layout': {
      'text-field': '{NAME}',
      'visibility': 'visible',
      'symbol-placement': 'line',
      'text-size': 12,
      'icon-image': '县级市', // 图标未换
      'icon-text-fit': 'both',
      'icon-text-fit-padding': [2, 2, 2, 2],
      'text-justify': 'center',
      'text-font': ['黑体'],
      'text-pitch-alignment': 'viewport',
      'text-rotation-alignment': 'viewport',
      'icon-rotation-alignment': 'viewport',
      'text-anchor': 'center',
      'text-keep-upright': false,
      // "symbol-placement": "line",
    },
    'paint': {
      'text-color': 'rgba(65, 65, 65, 1)',
      'text-halo-width': 2,
      'text-halo-color': 'rgba(255, 255, 255, 1)',

    }
  },
  // 点
  {
    id: '7L_POI', // POI图层
    type: 'symbol',
    source: 'composite',
    'source-layer': 'DS_POI',
    minzoom: _visibleLevel,
    'layout': {
      'text-field': {
        'stops': [
          [7, '{newname}'],
          // [14, '{newname}人民政府']
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