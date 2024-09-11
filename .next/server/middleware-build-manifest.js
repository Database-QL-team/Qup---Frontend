self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/difficulty-problems": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/difficulty-problems.js"
    ],
    "/ewha-ranking": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/ewha-ranking.js"
    ],
    "/tag-problems": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/tag-problems.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];