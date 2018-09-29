/**
 * @author sl 2019-01-02
 */

import mapboxgl from 'mapbox-gl';
import style from './styles/light-sd';
import addSource from './addSource';

var map = new mapboxgl.Map({
  hash: true,
  container: 'map',
  style,
  showTileBoundaries: true,
  center: [117.8929, 37.554],
  zoom: 15,
  minzoom: 7,
  maxzoom: 22,
  localIdeographFontFamily: "'黑体'"
});

const _addSourceFunc = function () {
  addSource.addFuncLv8(map);
  // addSource.addFuncLv9(map);
  addSource.addFuncLv11(map);
  addSource.addFuncLv15(map);
}

map.on('load', function () {
  _addSourceFunc();
}).on('zoom', function () { /* 为zoom事件添加监听器 */
  _addSourceFunc();
});

map.addControl(new mapboxgl.NavigationControl());