var APP_DATA = {
  "scenes": [
    {
      "id": "0-com1-building",
      "name": "COM1 Building",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2742660253133966,
        "pitch": -0.3782769365901082,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.308550414678038,
          "pitch": 0.09062850076545814,
          "rotation": 0.7853981633974483,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0860186942711856,
          "pitch": -0.315607297267837,
          "title": "School of Computing Building",
          "text": "The building where computing students head for studies and other related activities"
        }
      ]
    },
    {
      "id": "1-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.8639389967206963,
        "pitch": 0.0957569822749278,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.42237954166767,
          "pitch": 0.17792886343697845,
          "rotation": 4.71238898038469,
          "target": "0-com1-building"
        },
        {
          "yaw": 2.2620058026292558,
          "pitch": 0.11443020697405792,
          "rotation": 0,
          "target": "2-foyer-at-level-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0356495826835754,
          "pitch": 0.04696034563869311,
          "title": "Lobby information counter",
          "text": "Feel free to ask for directions or any other form of help when needed"
        }
      ]
    },
    {
      "id": "2-foyer-at-level-2",
      "name": "Foyer at Level 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.1227458777407326,
        "pitch": 0.20274226896307823,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -2.9220680674293043,
          "pitch": 0.04579614582196534,
          "rotation": 2.356194490192345,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.13209991189201276,
          "pitch": 0.01342995624019494,
          "title": "Lv2 Foyer",
          "text": "Linked to lecture halls and tutorial rooms"
        }
      ]
    }
  ],
  "name": "School of Computing",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
