{
  "version": 8,
  "metadata": {
    "zjditu:k": {
      "9m": "zb",
      "Ax": "4v,lx,kR,JB,2Z,Nr,G9,Rn,ro,ak,q4,e8,VM,XY,QV,OP,59,xw,0w,90m,vxB,oog,PZ9,bD9",
      "zb": "8R,P9,b9",
      "og": "og,Ax,7MY,4Wv,lPx,kKR,JlB,25Z,wDe,Kox,NKr,GJ9,MDO",
      "P9": "we,Kx,MO,3X,jP,nX,Yj,6Q,gZ,1r,Ba,WG,DG,ZP,ya,mo,zbb,A9x,83R",
      "8R": "7Y",
      "vB": "vB"
    }
  },
  "sprite": "http://47.97.24.100:8899/icons/streets",
  "glyphs": "http://47.97.24.100:8899/fonts/{fontstack}/{range}.pbf",
  "sources": {
    "osm": {
      "type": "vector",
      "tiles": ["http://demo.zjditu.cn/vtiles/tdt_zj/{z}/{x}/{y}.mvt?v={v}"]
    }
  },
  "layers": [{
    "id": "zb",
    "type": "background",
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "background-color": "rgba(52, 52, 51, 1)"
    }
  }, {
    "id": "vB",
    "type": "fill",
    "source": "osm",
    "source-layer": "og",
    "minzoom": 8,
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(25, 26, 27, 1)"
    }
  }, {
    "id": "og",
    "type": "symbol",
    "source": "osm",
    "source-layer": "zb",
    "maxzoom": 22,
    "minzoom": 7,
    "filter": ["all", ["in", "9m", "Xb0JA7D", "Xb0w60W", "Xb0wxbq", "Xb0wNBO"]],
    "layout": {
      "visibility": "visible",
      "text-field": "{name}",
      "text-size": 12,
      "text-padding": 30,
      "text-rotation-alignment": "viewport",
      "text-pitch-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(192, 192, 192, 1)"
    }
  }, {
    "id": "Ax",
    "type": "symbol",
    "source": "osm",
    "source-layer": "zb",
    "maxzoom": 22,
    "minzoom": 10,
    "filter": ["all", ["!in", "9m", "Xb0JA7D", "Xb0w60W", "Xb0wxbq", "Xb0wNBO"]],
    "layout": {
      "visibility": "visible",
      "text-field": "{name}",
      "text-size": 12,
      "text-padding": 20,
      "text-rotation-alignment": "viewport",
      "text-pitch-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(192, 192, 192, 1)"
    }
  }, {
    "id": "8R",
    "type": "fill",
    "source": "osm",
    "source-layer": "8R",
    "minzoom": 10,
    "filter": ["all"],
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(44, 44, 43, 1)"
    }
  }, {
    "id": "P9",
    "type": "fill",
    "source": "osm",
    "source-layer": "8R",
    "minzoom": 9,
    "filter": ["all", ["==", "9m", "9lOb05K"]],
    "layout": {
      "visibility": "none"
    },
    "paint": {
      "fill-color": "#BED2FF"
    }
  }, {
    "id": "b9",
    "type": "fill",
    "source": "osm",
    "source-layer": "8R",
    "minzoom": 8,
    "filter": ["any", ["==", "9m", "9lOXxJm"],
      ["==", "9m", "9lObNbX"]
    ],
    "layout": {
      "visibility": "none"
    },
    "paint": {
      "fill-color": "#CEDEB6",
      "fill-antialias": true
    }
  }, {
    "id": "7Y",
    "type": "fill",
    "source": "osm",
    "source-layer": "kR",
    "minzoom": 6,
    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-color": "rgba(50, 53, 51, 1)"
    }
  }, {
    "id": "4v",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 8,
    "filter": ["none", ["in", "9m", "w4XRjwX", "w4X91YR", "w4X9NWl", "w4Xl6nR"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(69, 69, 69, 1)",
      "line-width": 5
    }
  }, {
    "id": "lx",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 8,
    "filter": ["none", ["in", "9m", "w4XRjwX", "w4X91YR", "w4X9NWl", "w4Xl6nR"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(44, 44, 44, 1)",
      "line-width": 4
    }
  }, {
    "id": "kR",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 6,
    "filter": ["any", ["in", "zb", "2PnPKR5", "2PnPlGZ"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 2.6],
          [16, 4],
          [17, 6],
          [18, 7]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "JB",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 6,
    "filter": ["any", ["in", "zb", "2PnPKR5", "2PnPlGZ", "2PnGMVv"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 4.6],
          [16, 6],
          [17, 8],
          [18, 9]
        ]
      },
      "line-color": "rgba(44, 44, 44, 1)",
      "line-offset": 0
    }
  }, {
    "id": "2Z",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 6,
    "filter": ["any", ["in", "zb", "2PnPKR5", "2PnPlGZ", "2PnGMVv"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 2.6],
          [16, 4],
          [17, 6],
          [18, 7]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "we",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 6,
    "filter": ["any", ["in", "zb", "2PnPKR5", "2PnPlGZ", "2PnGMVv"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 4.6],
          [16, 6],
          [17, 8],
          [18, 9]
        ]
      },
      "line-color": "rgba(44, 44, 44, 1)",
      "line-offset": 0
    }
  }, {
    "id": "Kx",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 6,
    "filter": ["any", ["in", "zb", "2PnPKR5", "2PnPlGZ", "2PnGMVv"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 2.6],
          [16, 4],
          [17, 6],
          [18, 7]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "Nr",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 12,
    "filter": ["any", ["in", "zb", "2r0WR25", "2r0WgrZ"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 5],
          [17, 9],
          [18, 10]
        ]
      },
      "line-color": "rgba(44, 44, 44, 1)",
      "line-offset": 0
    }
  }, {
    "id": "G9",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 12,
    "filter": ["any", ["in", "zb", "2r0WR25", "2r0WgrZ"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 3],
          [17, 7],
          [18, 8]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "MO",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 12,
    "filter": ["any", ["in", "zb", "2r0WR25", "2r0WgrZ"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 2],
          [17, 9],
          [18, 10]
        ]
      },
      "line-color": "rgba(44, 44, 44, 1)",
      "line-offset": 0
    }
  }, {
    "id": "3X",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 12,
    "filter": ["any", ["in", "zb", "2r0WR25", "2r0WgrZ"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [15, 3],
          [16, 5],
          [17, 7],
          [18, 8]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "Rn",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 6,
    "filter": ["any", ["in", "zb", "2rv4wjq", "2rvOnaN", "2PR14WM", "wm60xBj", "2r0WR25"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": 2,
      "line-color": "rgba(44, 44, 44, 1)",
      "line-offset": 0
    }
  }, {
    "id": "ro",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 10,
    "filter": ["any", ["in", "zb", "2rv4wjq", "2rvOnaN", "2PR14WM", "wm60xBj", "2r0WR25"]],
    "layout": {
      "line-cap": "round"
    },
    "paint": {
      "line-width": 1.4,
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "jP",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 6,
    "filter": ["any", ["in", "zb", "2rv4wjq", "2rvOnaN", "2PR14WM", "wm60xBj", "2r0WR25"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": 2,
      "line-color": "rgba(44, 44, 44, 1)",
      "line-offset": 0
    }
  }, {
    "id": "nX",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 10,
    "filter": ["any", ["in", "zb", "2rv4wjq", "2rvOnaN", "2PR14WM", "wm60xBj", "2r0WR25"]],
    "layout": {
      "line-cap": "butt"
    },
    "paint": {
      "line-width": 1.4,
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "ak",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 6,
    "filter": ["all", ["==", "zb", "2r0xo79"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "bevel"
    },
    "paint": {
      "line-color": "rgba(44, 44, 44, 1)",
      "line-width": {
        "stops": [
          [13, 3.6],
          [18, 10]
        ]
      }
    }
  }, {
    "id": "q4",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 6,
    "filter": ["all", ["==", "zb", "2r0xo79"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(69, 69, 69, 1)",
      "line-width": {
        "stops": [
          [13, 2],
          [18, 8]
        ]
      }
    }
  }, {
    "id": "e8",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 10,
    "filter": ["any", ["in", "9m", "2rvDDMq", "2rvDvJN", "2Pnr80j", "2rv8XzN", "2rv8Go9"]],
    "layout": {
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [11, 3.4],
          [12, 4.4],
          [13, 5],
          [18, 11]
        ]
      },
      "line-color": "rgba(44, 44, 44, 1)",
      "line-offset": 0
    }
  }, {
    "id": "VM",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "9m", "2rvDDMq", "2rvDvJN", "2Pnr80j", "2rv8XzN", "2rv8Go9"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [9, 1],
          [10, 1.4],
          [11, 1.4],
          [12, 2.4],
          [13, 3],
          [18, 9]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "Yj",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 10,
    "filter": ["any", ["in", "9m", "2rvDDMq", "2rvDvJN", "2Pnr80j", "2rv8XzN", "2rv8Go9"]],
    "layout": {
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [11, 3.4],
          [12, 4.4],
          [13, 5],
          [18, 11]
        ]
      },
      "line-color": "rgba(44, 44, 44, 1)",
      "line-offset": 0
    }
  }, {
    "id": "6Q",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 7,
    "filter": ["any", ["in", "9m", "2rvDDMq", "2rvDvJN", "2Pnr80j", "2rv8XzN", "2rv8Go9"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [9, 1],
          [10, 1.4],
          [11, 1.4],
          [12, 2.4],
          [13, 3],
          [18, 9]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "XY",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 10,
    "filter": ["any", ["in", "9m", "2PRoDvq"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [12, 4],
          [13, 4.4],
          [14, 5],
          [15, 6],
          [16, 8],
          [17, 10],
          [18, 9]
        ]
      },
      "line-color": {
        "stops": [
          [12, "rgba(44, 44, 44, 1)"],
          [14, "rgba(220, 219, 205, 1)"],
          [15, "rgba(210, 210, 210, 1)"],
          [16, "rgba(132, 123, 93, 1)"],
          [17, "rgba(132, 123, 93, 1)"],
          [18, "rgba(220, 210, 173, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "QV",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 10,
    "filter": ["any", ["in", "9m", "2PRoDvq"]],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [12, 2],
          [13, 2.4],
          [14, 3],
          [15, 4],
          [16, 6],
          [17, 8],
          [18, 7]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "gZ",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 10,
    "filter": ["any", ["in", "9m", "2PRoDvq"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [12, 4],
          [13, 4.4],
          [14, 5],
          [15, 6],
          [16, 8],
          [17, 10],
          [18, 9]
        ]
      },
      "line-color": {
        "stops": [
          [12, "rgba(44, 44, 44, 1)"],
          [14, "rgba(220, 219, 205, 1)"],
          [15, "rgba(210, 210, 210, 1)"],
          [16, "rgba(132, 123, 93, 1)"],
          [17, "rgba(132, 123, 93, 1)"],
          [18, "rgba(220, 210, 173, 1)"]
        ]
      },
      "line-offset": 0
    }
  }, {
    "id": "1r",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 10,
    "filter": ["any", ["in", "9m", "2PRoDvq"]],
    "layout": {
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [12, 2],
          [13, 2.4],
          [14, 3],
          [15, 4],
          [16, 6],
          [17, 8],
          [18, 7]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "OP",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 9,
    "filter": ["any", ["in", "9m", "2Pnrkmv", "2rvn4yM", "2roGK0M"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [10, 2.4],
          [11, 4.6],
          [12, 5.4],
          [13, 7],
          [18, 12]
        ]
      },
      "line-color": "rgba(44, 44, 44, 1)",
      "line-offset": 0
    }
  }, {
    "id": "59",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "9m", "2Pnrkmv", "2rvn4yM", "2roGK0M"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [8, 1],
          [9, 1.5],
          [10, 2],
          [11, 2.6],
          [12, 3.4],
          [13, 5],
          [18, 10]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "Ba",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 9,
    "filter": ["any", ["in", "9m", "2Pnrkmv", "2rvn4yM", "2roGK0M"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [10, 2.4],
          [11, 4.6],
          [12, 5.4],
          [13, 7],
          [18, 12]
        ]
      },
      "line-color": "rgba(44, 44, 44, 1)",
      "line-offset": 0
    }
  }, {
    "id": "WG",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 7,
    "filter": ["any", ["in", "9m", "2Pnrkmv", "2rvn4yM", "2roGK0M"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-width": {
        "stops": [
          [8, 1],
          [9, 1.5],
          [10, 2],
          [11, 2.6],
          [12, 3.4],
          [13, 5],
          [18, 10]
        ]
      },
      "line-color": "rgba(69, 69, 69, 1)",
      "line-offset": 0
    }
  }, {
    "id": "DG",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 6,
    "filter": ["all", ["==", "zb", "2r0xo79"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "bevel"
    },
    "paint": {
      "line-color": "rgba(44, 44, 44, 1)",
      "line-width": {
        "stops": [
          [13, 3.6],
          [18, 10]
        ]
      }
    }
  }, {
    "id": "ZP",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 6,
    "filter": ["all", ["==", "zb", "2r0xo79"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(69, 69, 69, 1)",
      "line-width": {
        "stops": [
          [13, 2],
          [18, 8]
        ]
      }
    }
  }, {
    "id": "xw",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2ro78ml", "2roGK0M", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(44, 44, 44, 1)",
      "line-width": {
        "stops": [
          [10, 4],
          [11, 6],
          [18, 14]
        ]
      }
    }
  }, {
    "id": "0w",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2ro78ml", "2roGK0M", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(69, 69, 69, 1)",
      "line-width": {
        "stops": [
          [8, 1.4],
          [9, 2.2],
          [10, 3],
          [18, 12]
        ]
      }
    }
  }, {
    "id": "ya",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2ro78ml", "2roGK0M", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(44, 44, 44, 1)",
      "line-width": {
        "stops": [
          [10, 4],
          [11, 6],
          [18, 14]
        ]
      }
    }
  }, {
    "id": "mo",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2ro78ml", "2roGK0M", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(69, 69, 69, 1)",
      "line-width": {
        "stops": [
          [8, 1.4],
          [9, 2.2],
          [10, 3],
          [18, 12]
        ]
      }
    }
  }, {
    "id": "90m",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 4,
    "maxzoom": 8,
    "filter": ["any", ["in", "zb", "2ro78ml", "2roGK0M", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(69, 69, 69, 1)",
      "line-width": {
        "stops": [
          [5, 0.6],
          [6, 1],
          [7, 1.2]
        ]
      }
    }
  }, {
    "id": "zbb",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 4,
    "maxzoom": 7,
    "filter": ["any", ["in", "zb", "2ro78ml", "2roGK0M", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(69, 69, 69, 1)",
      "line-width": {
        "stops": [
          [5, 0.6],
          [6, 1],
          [7, 1.2]
        ]
      }
    }
  }, {
    "id": "vxB",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 10,
    "filter": ["any", ["in", "zb", "2rorYgG", "2rorQwl"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(44, 44, 44, 1)",
      "line-width": {
        "stops": [
          [11, 7],
          [17, 14],
          [19, 14]
        ]
      }
    }
  }, {
    "id": "oog",
    "type": "line",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 9,
    "filter": ["any", ["in", "zb", "2rorYgG", "2rorQwl"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(69, 69, 69, 1)",
      "line-width": {
        "stops": [
          [11, 6],
          [17, 12],
          [19, 12]
        ]
      }
    }
  }, {
    "id": "A9x",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 10,
    "filter": ["any", ["in", "zb", "2rorYgG", "2rorQwl"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(44, 44, 44, 1)",
      "line-width": {
        "stops": [
          [11, 7],
          [17, 14],
          [19, 14]
        ]
      }
    }
  }, {
    "id": "83R",
    "type": "line",
    "source": "osm",
    "source-layer": "2Z",
    "minzoom": 9,
    "filter": ["any", ["in", "zb", "2rorYgG", "2rorQwl"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "butt",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(69, 69, 69, 1)",
      "line-width": {
        "stops": [
          [11, 6],
          [17, 12],
          [19, 12]
        ]
      }
    }
  }, {
    "id": "PZ9",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 8,
    "filter": ["any", ["in", "9m", "w4XRjwX", "w4X91YR", "w4X9NWl", "w4Xl6nR"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "rgba(44, 44, 44, 1)",
      "line-width": 2.2
    }
  }, {
    "id": "bD9",
    "type": "line",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 8,
    "filter": ["any", ["in", "9m", "w4XRjwX", "w4X91YR", "w4X9NWl", "w4Xl6nR"]],
    "layout": {
      "visibility": "visible",
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-dasharray": [6, 8],
      "line-color": "rgba(69, 69, 69, 1)",
      "line-width": 1.6
    }
  }, {
    "id": "7MY",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 7,
    "filter": ["any", ["in", "zb", "2rorYgG", "2rorQwl"]],
    "layout": {
      "visibility": "visible",
      "text-field": "{name}",
      "symbol-placement": "line",
      "text-padding": {
        "stops": [
          [10, 1],
          [11, 2]
        ]
      },
      "text-allow-overlap": false,
      "text-ignore-placement": false,
      "text-pitch-alignment": "viewport",
      "text-max-angle": 45,
      "text-keep-upright": true,
      "text-rotation-alignment": "map",
      "symbol-spacing": 500,
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": {
        "stops": [
          [9, 10],
          [20, 16]
        ]
      },
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(199, 199, 199, 1)",
      "text-halo-width": 1,
      "text-halo-color": "rgba(33, 33, 33, 1)",
      "text-translate-anchor": "map"
    }
  }, {
    "id": "4Wv",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 4,
    "filter": ["any", ["in", "zb", "2ro78ml", "2roGK0M", "wm1Wwa6", "2PnB1lq"]],
    "layout": {
      "visibility": "visible",
      "symbol-placement": "line",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-size": {
        "stops": [
          [13, 13],
          [14, 14]
        ]
      },
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(192, 192, 192, 1)",
      "text-halo-width": 1,
      "text-halo-color": "rgba(33, 33, 33, 1)"
    }
  }, {
    "id": "lPx",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 14,
    "filter": ["any", ["in", "9m", "2Pnrkmv", "2rvn4yM", "2roGK0M"]],
    "layout": {
      "visibility": "visible",
      "symbol-placement": "line",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": {
        "stops": [
          [12, 11],
          [13, 12]
        ]
      },
      "text-padding": 1,
      "symbol-spacing": 800,
      "icon-rotation-alignment": "map"
    },
    "paint": {
      "text-color": "rgba(192, 192, 192, 1)",
      "text-halo-width": 1,
      "text-halo-color": "rgba(33, 33, 33, 1)"
    }
  }, {
    "id": "kKR",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 14,
    "filter": ["any", ["in", "9m", "2rvDDMq", "2rvDvJN", "2Pnr80j", "2rv8XzN", "2rv8Go9"]],
    "layout": {
      "symbol-placement": "line",
      "text-field": "{name}",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": {
        "stops": [
          [14, 11],
          [15, 12]
        ]
      },
      "symbol-spacing": 800,
      "icon-rotation-alignment": "map"
    },
    "paint": {
      "text-color": "rgba(192, 192, 192, 1)",
      "text-halo-width": 1,
      "text-halo-color": "rgba(33, 33, 33, 1)"
    }
  }, {
    "id": "JlB",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 10,
    "filter": ["any", ["in", "9m", "2PRoDvq"]],
    "layout": {
      "symbol-placement": "line",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-letter-spacing": 1,
      "text-size": 11,
      "icon-rotation-alignment": "map"
    },
    "paint": {
      "text-color": "rgba(192, 192, 192, 1)",
      "text-halo-width": 1,
      "text-halo-color": "rgba(33, 33, 33, 1)"
    }
  }, {
    "id": "25Z",
    "type": "symbol",
    "source": "osm",
    "source-layer": "4v",
    "minzoom": 15,
    "filter": ["any", ["in", "zb", "2PnPKR5", "2PnPlGZ", "2PnGMVv"]],
    "layout": {
      "symbol-placement": "line",
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "map",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": 11,
      "text-letter-spacing": 0,
      "symbol-spacing": 500,
      "text-padding": 0,
      "icon-rotation-alignment": "map"
    },
    "paint": {
      "text-color": "rgba(192, 192, 192, 1)",
      "text-halo-width": 1,
      "text-halo-color": "rgba(33, 33, 33, 1)"
    }
  }, {
    "id": "wDe",
    "type": "symbol",
    "source": "osm",
    "source-layer": "7Y",
    "minzoom": 15,
    "filter": ["none", ["in", "9m", "w4XRjwX", "w4X91YR", "w4X9NWl", "w4Xl6nR"]],
    "layout": {
      "visibility": "visible",
      "symbol-placement": "line",
      "text-rotation-alignment": "map",
      "text-field": "{name}",
      "text-font": ["Arial Unicode MS Bold"],
      "text-size": 12.5,
      "icon-rotation-alignment": "map",
      "text-pitch-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(192, 192, 192, 1)",
      "text-halo-width": 1,
      "text-halo-color": "rgba(33, 33, 33, 1)"
    }
  }, {
    "id": "Kox",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 8,
    "filter": ["all", ["!in", "9m", "PO6ZgrA", "PO6ZO1q"]],
    "layout": {
      "text-field": "{name}",
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": {
        "stops": [
          [10, 10],
          [15, 18]
        ]
      },
      "text-padding": 4,
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(128, 128, 128, 1)",
      "text-halo-color": "rgba(26, 26, 26, 0.75)",
      "text-halo-width": 1.5
    }
  }, {
    "id": "NKr",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 8,
    "filter": ["all", ["==", "9m", "PO6ZgrA"]],
    "layout": {
      "text-field": "{name}",
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": {
        "stops": [
          [7, 11.5],
          [15, 20]
        ]
      },
      "text-padding": 4,
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(192, 192, 192, 1)"
    }
  }, {
    "id": "GJ9",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Ax",
    "minzoom": 6,
    "filter": ["all", ["==", "9m", "PO6ZO1q"]],
    "layout": {
      "text-field": "{name}",
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": {
        "stops": [
          [8, 14],
          [13, 20]
        ]
      },
      "text-padding": 4,
      "text-justify": "center",
      "text-font": ["Arial Unicode MS Blod", "Open Sans Regular"],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(230, 230, 230, 1)",
      "text-halo-color": "rgba(26, 26, 26, 07)",
      "text-opacity": 0.75,
      "text-halo-width": 1.5
    }
  }, {
    "id": "MDO",
    "type": "symbol",
    "source": "osm",
    "source-layer": "Kx",
    "minzoom": 6,
    "filter": ["all", ["==", "stylename", "地铁口"]],
    "layout": {
      "text-field": "{name}",
      "visibility": "visible",
      "symbol-placement": "point",
      "text-size": 10,
      "text-padding": 4,
      "text-justify": "center",
      "text-font": ["Arial Unicode MS Blod", "Open Sans Regular"],
      "text-pitch-alignment": "viewport",
      "text-rotation-alignment": "viewport",
      "icon-rotation-alignment": "viewport"
    },
    "paint": {
      "text-color": "rgba(230, 230, 230, 1)",
      "text-halo-color": "rgba(26, 26, 26, 07)",
      "text-opacity": 0.75,
      "text-halo-width": 1.5
    }
  }],
  "id": "x04sv9tch"
}