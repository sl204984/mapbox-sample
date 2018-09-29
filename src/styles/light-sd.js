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
 */

const layers = [{
    id: 'background', // 背景
    type: 'background',
    layout: {},
    paint: {
      'background-color': 'hsl(55, 11%, 96%)'
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
    id: 'GVEGPL', // 记录了绿地
    type: 'fill',
    source: 'composite',
    'source-layer': 'SD_GVEGPL', // py是面
    layout: {},
    paint: {
      'fill-color': '#58D68D',
      'fill-opacity': 0.5,
      'fill-antialias': false
    }
  },
  /**
   * 线
   */
  {
    id: 'GBOULN', // 记录了各个镇的边界，有名字的记录的是省界和岛屿（name不为空）
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GBOULN', // LN，line的简写
    // minzoom: 10,
    layout: {
      'line-cap': 'round',
      'line-join': 'round'
    },
    paint: {
      'line-width': 1,
      'line-color': 'rgba(180, 180, 180, 1)',
      'line-offset': 0
    }
  }, {
    id: 'GRAILN_bottom', // 记录了铁路，底层颜色灰色
    type: 'line',
    source: 'composite',
    'source-layer': 'SD_GRAILN', // LN，line的简写
    minzoom: 8,
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
    minzoom: 8,
    layout: {
      'line-cap': 'round',
      'line-join': 'round'
    },
    paint: {
      'line-color': '#FFFFFF',
      'line-dasharray': [5, 5],
      // 'line-gap-width': 0.1,
      'line-width': 1.6
    }
  }, {
    id: 'GROALN', // 路网图层（name字段）
    type: 'line',
    source: 'composite',
    'source-layer': 'GS_GROALN', // LN，line的简写
    layout: {
      'line-cap': 'round',
      'line-join': 'round',
    },
    paint: {
      'line-width': {
        'base': 1.5,
        'stops': [
          [9, 1],
          [18, 80]
        ]
      },
      'line-color': '#8E44AD',
      // 'fill-antialias': true
    }
  },
  /**
   * 点
   */
  {
    id: '7L_POI', // POI图层
    type: 'symbol',
    source: 'composite',
    'source-layer': 'DS_POI',
    minzoom: 7,
    'layout': {
      'text-field': {
        'stops': [
          [7, '{newname}'],
          [14, '{newname}人民政府']
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