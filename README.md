# mapbox-sample

## 启动

<!-- - 1.在根目录路径下输入 npm install 或 yarn，会自动下载所需的包 -->

- 2.安装完成对应的包以后，npm start，会自动打开浏览器
- 3.配置了热更新，不需要每次更改代码后重启

## 文件注释

- 本工程采用最新的 webpack4.x 配置，基本实现 0 配置
- css 样式文件在./static/css/mapbox-gl.css 中
- 所有文件在 src 中
- styles 文件夹是扒下来的 mapbox 自带的所有的样式，其中 styles 文件夹中的 style.js 是浙江天地地图中的样式配置
- ol 文件夹下面是扒的 geoserver 中的文件
- zj 文件夹下面是扒的浙江天地图中的数据
- sprite.json 是小图标对应的样式，由于配置中必须以请求的形式返回，所以这个应该放在服务器端。sprite.json 必须与 sprite.png 对应

## 配置

- 1. mapbox 相应配置：https://www.mapbox.com/mapbox-gl-js/style-spec#layers-background
- 2. 在线生成雪碧图：https://www.toptal.com/developers/css/sprite-generator
