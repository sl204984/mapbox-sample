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
  center: [118.034803, 36.80564],
  zoom: 18,
  pitch: 60,
  bearing: -13.6,

  minZoom: 7,
  maxZoom: 22,
  localIdeographFontFamily: "'黑体'"
});

const _addSourceFunc = function () {
  addSource.addFuncLv8(map);
  addSource.addFuncLv9(map); // 9级的村庄暂时不显示
  addSource.addFuncLv11(map);
  addSource.addFuncLv15(map);
}

fetch('116.62.186.152:12808/map/style.json').then(function (response) {
  // handle HTTP response
  console.log('response====>', response);
}, function (error) {
  // handle network error
})

map.on('load', function () {
  _addSourceFunc();
}).on('zoom', function () { /* 为zoom事件添加监听器 */
  _addSourceFunc();
});

map.addControl(new mapboxgl.NavigationControl());