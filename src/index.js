/**
 * @author sl
 * 更换服务器：style.sources.tiles[0] 更换内容
 * 1. ip + host
 * 2. TeacherLang ---> 对应的空间名称
 * 3. 3AZJDemoLayers ----> 对应的图层名称
 */

import mapboxgl from 'mapbox-gl';
import style from './styles/light-sd';

var map = new mapboxgl.Map({
  hash: true,
  container: 'map',
  style,
  showTileBoundaries: true,
  center: [117.8929, 37.554],
  // center: [117.67868, 36.28647],
  // center: [120.76262, 30.75455],
  zoom: 15,
  minzoom: 7,
  maxzoom: 22,
  localIdeographFontFamily: "'黑体'"
});

// map.on('zoom', function () { /* 为zoom事件添加监听器 */
//   if (map.getZoom() > 15 && !map.getSource("addedSource")) {
//     map.addSource('addedSource', {
//       type: 'vector',
//       scheme: 'tms',
//       tiles: [
//         'http://116.62.186.152:8080/geoserver/gwc/service/tms/1.0.0/SDWorkSpace%3ASDLayers@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf'

//       ]
//     })
//     map.addLayer({
//       id: 'GVEGPL__', // 记录了绿地
//       type: 'fill',
//       source: 'addedSource',
//       'source-layer': 'SD_GRESPL', // py是面
//       layout: {},
//       paint: {
//         'fill-color': 'green',
//         'fill-opacity': 0.1,
//         'fill-antialias': false
//       }
//     });
//   }
// });

// map.on('load', function () {

//   map.addSource('addedSource', {
//     type: 'vector',
//     scheme: 'tms',
//     tiles: [
//       'http://116.62.186.152:8080/geoserver/gwc/service/tms/1.0.0/SDWorkSpace%3ASDLayers@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf'

//     ]
//   })
//   map.addLayer({
//     id: 'GVEGPL__', // 记录了绿地
//     type: 'fill',
//     source: 'addedSource',
//     'source-layer': 'SD_GRESPL', // py是面
//     layout: {},
//     paint: {
//       'fill-color': 'green',
//       'fill-opacity': 0.1,
//       'fill-antialias': false
//     }
//   });
// });




map.addControl(new mapboxgl.NavigationControl());