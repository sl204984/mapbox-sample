window.config = {
  MAP_DATA_URL: 'http://demo.zjditu.cn:8080/cqt',
  POI_URL: '',
  MAP: {
    center: [120.2, 30.2],
    zoom: 11,
    max_zoom: 19,
    min_zoom: 7
  },
  LAYER_MAPPING: {
    '底图': '9m',
    '居民地 / 绿地': 'zb',
    '兴趣点': 'vB',
    '水系': 'og',
    '界限': 'Ax',
    '标注': '8R',
    '地名点': 'P9',
    '道路': 'b9',
    '辅助线': '7Y'
  },
  PICK_ANNO_LAYERS: ['vB'], // id 兴趣点
  FEATURE_KEY_MAPPING: {
    name: '名称',
    // fcode: '分类代码',
    roadcode: '道路编码',
    h: '高度',
    // display: '道路显示代码',
    // stylename: '图标'
  },
  STYLES: [
    // {key: 'street', src: './static/styles/streets.json', label: '街道'},
    {
      key: 'street',
      src: 'http://47.97.24.100:8899/styles/tdt/streets.json',
      label: '街道'
    },
    {
      key: 'dark',
      src: 'http://47.97.24.100:8899/styles/tdt/dark.json',
      label: '夜晚'
    },
    {
      key: 'img',
      src: 'http://47.97.24.100:8899/styles/tdt/img.json',
      label: '影像'
    },
    // {key: 'img', src: 'http://47.97.24.100:8899/styles/tdt/img.json', label: '影像'},
    // {key: 'road', src: 'http://47.97.24.100:8899/styles/tdt/road.json', label: '道路'},
    // {key: 'water', src: 'http://47.97.24.100:8899/styles/tdt/water.json', label: '水系'},
    {
      key: '2000s',
      src: './static/styles/2000s.json',
      label: '2000影像'
    },
    {
      key: '70s',
      src: './static/styles/70s.json',
      label: '70年代影像'
    },
    {
      key: '60s',
      src: './static/styles/60s.json',
      label: '60年代影像'
    }
  ],
  TDT_TYPE: [{
      label: '餐饮',
      code: '120203,120201,120202,120204',
      icon: 'canyin'
    },
    // {label: '银行', code: '160501,160502,160503', icon: 'yinhang'},
    {
      label: '超市',
      code: '150102',
      icon: 'chaoshi'
    },
    // {label: '购物', code: '150101'},
    // {label: '电影院', code: '140301', icon: 'dianying'},
    // {label: '学校', code: '160101,160102,160103', icon: 'xuexiao'},
    // {label: '医院', code: '160301,160302', icon: 'yiyuan'},
    // {label: '景点', code: '130201,130101,130102,130103,130302,130303', icon: 'jingdian'},
    {
      label: '酒店',
      code: '120101,120102,120103',
      icon: 'jiudian'
    }
  ],
  ZW_TYPE: [{
      id: '40',
      label: '教育',
      icon: 'jiaoyu'
    },
    {
      id: '41',
      label: '婚育收养',
      icon: 'hunyu'
    },
    {
      id: '42',
      label: '福利救助',
      icon: 'fuli'
    },
    {
      id: '43',
      label: '求职',
      icon: 'qiuzhi'
    },
    {
      id: '44',
      label: '纳税',
      icon: 'nashui'
    },
    {
      id: '45',
      label: '就医保健',
      icon: 'jiuyi'
    },
    {
      id: '46',
      label: '公共交通',
      icon: 'jiaotong'
    },
    {
      id: '47',
      label: '自驾出行',
      icon: 'zijia'
    },
    {
      id: '48',
      label: '场馆设施',
      icon: 'changguan'
    },
    {
      id: '49',
      label: '旅游',
      icon: 'lvyou'
    },
    {
      id: '50',
      label: '司法',
      icon: 'sifa'
    },
    {
      id: '51',
      label: '银行',
      icon: 'yinhang'
    },
    {
      id: '130',
      label: '环境保护',
      icon: 'huanjing'
    },
    {
      id: '137',
      label: '防灾减灾',
      icon: 'fangzai'
    },
    {
      id: '140',
      label: '基础信息',
      icon: 'jichu'
    }
  ],
  TDT_SEARCH_API: {
    label: '天地图搜索api',
    src: 'http://zjditu.cn/api/feature/query'
  },
  TDT_CURRENT_REGION: {
    label: '查询当前视图所在区域',
    src: 'http://www.zjditu.cn/api/geocoding/region'
  },
  DISTRICTS_CLASSIFY: {
    label: '区域分类',
    src: 'http://dlxxbs.zjzwfw.gov.cn/ReportServer/rest/columns/district/classify'
  },
  ZW_SUB_TYPE: {
    label: '政务子类别',
    src: 'http://dlxxbs.zjzwfw.gov.cn/ReportServer/rest/columns/hotmap/catalog/get'
  },
  ZW_SEARCH_API: {
    label: '政务搜索api',
    src: 'http://dlxxbs.zjzwfw.gov.cn/ReportServer/rest/columns/hotmap/poi/list'
  },
  ZW_CLUSTER_API: {
    label: '聚合',
    src: 'http://dlxxbs.zjzwfw.gov.cn/ReportServer/rest/columns/city/poi/count'
  },
  ZW_DISTRICTS: {
    label: '全省各个区域',
    src: './static/districtList.json'
  },
  ZW_RESOURCE_URL: {
    label: '政务资源地址',
    src: 'http://hz-resource-report-affix.oss-cn-hangzhou.aliyuncs.com'
  },
  AIR_QUALITY: {
    label: '空气质量',
    src: 'http://www.zjditu.cn/api/weather'
  },
  WEATHER_API: {
    label: '获取当前天气',
    src: 'https://free-api.heweather.com/s6/weather/now'
  },
  AIR_MAPPING: {
    aqi: 'AQI(空气质量指数)',
    pm2_5: 'PM2.5',
    co: 'CO',
    o3: '臭氧',
    no2: 'NO2',
    so2: 'SO2',
    pm10: 'PM10'
  },
  BRANCH: {
    'deqing': {
      title: '天地图·德清',
      center: [119.973, 30.545],
      zoom: 15,
      copyright: '甲测资字3300116；浙S（2014）143号 @data 德清县测绘与地理信息局',
      index: 'http://maps.dqplanning.gov.cn/index'
    },
    'jiashan': {
      title: '天地图·嘉善',
      center: [120.922, 30.833],
      zoom: 15
    }
  }
}