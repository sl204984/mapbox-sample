/**
 * @author sl
 * 更换服务器：style.sources.tiles[0] 更换内容
 * 1. ip + host
 * 2. TeacherLang ---> 对应的空间名称
 * 3. 3AZJDemoLayers ----> 对应的图层名称
 */

const layers = [{
    id: 'background', // 背景
    type: 'background',
    layout: {},
    paint: {
      'background-color': 'white'
    }
  },
  /**
   * 点
   */
  {
    id: 'GAGNPT', // 此图层记录了村庄POI
    type: 'symbol',
    source: 'composite',
    'source-layer': 'SD_GAGNPT',
    "paint": {
      "text-color": "#ffff00",
      "text-halo-color": "#ff0",
      "text-halo-width": 1,
      "text-halo-blur": 0
    }
  }, {
    id: 'GHFCPT', // 此图层记录了一些水站和XX闸
    type: 'symbol',
    source: 'composite',
    'source-layer': 'SD_GHFCPT',
    layout: {
      'text-pitch-alignment': 'viewport',
      'text-size': 12,
      'icon-image': 'airport-15',
      'symbol-placement': 'point'
    },
  }, {
    id: 'GHYDPT', // 记录一些井和XX泉
    type: 'symbol',
    source: 'composite',
    'source-layer': 'SD_GHYDPT',
    layout: {
      'text-pitch-alignment': 'viewport',
      'text-size': 12,
      'icon-image': 'alcohol-shop-11',
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': 'white'
    }
  }, {
    id: 'GNPNPT', // 记录了XX山和水库
    type: 'symbol',
    source: 'composite',
    'source-layer': 'SD_GNPNPT',
    layout: {
      'text-pitch-alignment': 'viewport',
      'text-size': 12,
      'icon-image': 'amusement-park-11',
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': 'white'
    }
  }, {
    id: 'GRFCPT', // 记录了一些学校，自来水厂，服务站，输油站，液化气站，遗址，陵墓，寺庙，游乐场等
    type: 'symbol',
    source: 'composite',
    'source-layer': 'SD_GRFCPT',
    layout: {
      'text-pitch-alignment': 'viewport',
      'text-size': 12,
      'icon-image': 'amusement-park-11',
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': 'white'
    }
  }, {
    id: 'GTFCPT', // 记录了一些学校，自来水厂，服务站，输油站，液化气站，遗址，陵墓，寺庙，游乐场等
    type: 'symbol',
    source: 'composite',
    'source-layer': 'SD_GTFCPT',
    layout: {
      'text-pitch-alignment': 'viewport',
      'text-size': 12,
      'icon-image': 'amusement-park-11',
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': 'white'
    }
  }, {
    id: 'POI', // POI图层
    type: 'symbol',
    source: 'composite',
    'source-layer': 'SD_POI',
    layout: {
      'text-pitch-alignment': 'viewport',
      'text-size': 12,
      'icon-image': 'amusement-park-11',
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': 'white'
    }
  },
  /**
   * 线
   */
  // {
  //   id: 'GBOULN', // 记录了各个镇的边界，有名字的记录的是省界和岛屿（name不为空）
  //   type: 'line',
  //   source: 'composite',
  //   'source-layer': 'SD_GBOULN', // LN，line的简写
  //   // minzoom: 10,
  //   layout: {
  //     'line-cap': 'round',
  //     'line-join': 'round'
  //   },
  //   paint: {
  //     "line-width": 1,
  //     "line-color": "rgba(180, 180, 180, 1)",
  //     "line-offset": 0
  //   }
  // }, 
  {
    id: 'GHFCLN', // 记录了河流，黄河，隧道等的边界
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GHFCLN', // LN，line的简写
    minzoom: 10,
    layout: {
      'line-cap': 'round',
      'line-join': 'round',

    },
    paint: {
      'line-width': 1,
      'line-color': '#A6ACAF',
    }
  }, {
    id: 'GHYDLN', // 记录了一些线性的水渠、河沟 不显示
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GHYDLN', // LN，line的简写
    minzoom: 10,
    layout: {
      'line-cap': 'round',
      'line-join': 'round'
    },
    paint: {
      'line-width': {
        "base": 1.5,
        "stops": [
          [9, 1],
          [18, 80]
        ]
      },
      'line-color': '#85C1E9',
    }
  }, {
    id: 'GRAILN', // 记录了铁路
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GRAILN', // LN，line的简写
    layout: {
      'line-cap': 'round',
      'line-join': 'round'
    },
    paint: {
      'line-width': {
        "base": 1.5,
        "stops": [
          [9, 1],
          [18, 80]
        ]
      },
      'line-color': 'black',
    }
  }, {
    id: 'GRFCLN', // 记录了长城岭，养殖场等
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GRFCLN', // LN，line的简写
    layout: {
      'line-cap': 'round',
      'line-join': 'round'
    },
    paint: {
      'line-width': {
        "base": 1.5,
        "stops": [
          [9, 1],
          [18, 80]
        ]
      },
      'line-color': 'rgba(253, 122, 0, 0.5)'
    }
  }, {
    id: 'GROALN', // 路网图层（name字段）
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GROALN', // LN，line的简写
    layout: {
      'line-cap': 'round',
      'line-join': 'round',

    },
    paint: {
      'line-width': {
        "base": 1.5,
        "stops": [
          [9, 1],
          [18, 80]
        ]
      },
      'line-color': '#009797', // 军绿色
    }
  }, {
    id: 'GTFCLN', // 记录了XX桥，XX通道
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GTFCLN', // LN，line的简写
    layout: {
      'line-cap': 'round',
      'line-join': 'round',

    },
    paint: {
      'line-width': {
        "base": 1.5,
        "stops": [
          [9, 1],
          [18, 80]
        ]
      },
      'line-color': '#009797', // 军绿色
    }
  },
  /**
   * 面
   */
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
    id: 'GRESPL', // 建筑物图层（高度统计的是H字段，不确定是不是此字段）
    type: 'fill',
    source: 'composite',
    'source-layer': 'SD_GRESPL', // py是面
    layout: {},
    paint: {
      'fill-color': '#ff0080',
      'fill-opacity': 0.1,
      'fill-antialias': false
    }
  }, {
    id: 'GRFCPL', // 记录了一些公司，养殖场，墓地等区域
    type: 'fill',
    source: 'composite',
    'source-layer': 'SD_GRFCPL', // py是面
    minzoom: 12,
    layout: {},
    paint: {
      'fill-color': '#F5B7B1',
      'fill-antialias': false
    }
  }, {
    id: 'GVEGPL', // 记录了绿地
    type: 'fill',
    source: 'composite',
    'source-layer': 'SD_GVEGPL', // py是面
    // minzoom: 8,
    layout: {},
    paint: {
      'fill-color': '#58D68D',
      'fill-opacity': 0.5,
      'fill-antialias': false
    }
  },

  // {
  //   id: 'marine-label-lg-ln',
  //   type: 'symbol',
  //   source: 'composite',
  //   'source-layer': 'HYD_PT', // PT，point的简写
  //   layout: {
  //     'text-field': '{FNAME}',
  //     'text-pitch-alignment': 'viewport',
  //     'text-size': 12
  //   },
  //   paint: {
  //     'text-color': 'black',
  //     'text-halo-blur': 0,
  //     'text-halo-color': 'hsla(0, 0%, 10%, 0.75)'
  //   }
  // }
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
  glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
  visibility: 'public',
  layers
};