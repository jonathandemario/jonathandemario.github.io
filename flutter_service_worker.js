'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b05061ece030716876564f83f2baf074",
"index.html": "c6ab200b65ff4121f928b7eb986a182f",
"/": "c6ab200b65ff4121f928b7eb986a182f",
"main.dart.js": "5ad1f605909306e16c4c2f35d4a85073",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5d17788ba1e0556df2f6d4f82c492db7",
"icons/Icon-192.png": "5d17788ba1e0556df2f6d4f82c492db7",
"icons/Icon-maskable-192.png": "5d17788ba1e0556df2f6d4f82c492db7",
"icons/Icon-maskable-512.png": "5d17788ba1e0556df2f6d4f82c492db7",
"icons/Icon-512.png": "5d17788ba1e0556df2f6d4f82c492db7",
"manifest.json": "b20f701d899b03c6f6083627d8480121",
"assets/AssetManifest.json": "bf20c11b78dd5ac47c832ada551cdf84",
"assets/NOTICES": "6c63158f200b5a05b40502bee99c8a4f",
"assets/FontManifest.json": "fb983b31738ba4e40f8ce31bf170a9d2",
"assets/AssetManifest.bin.json": "958408ff674d582cbd685c331f0270fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2f23ca9d23ff6e31b036369733d393cf",
"assets/fonts/MaterialIcons-Regular.otf": "6967aa87796100415e36a98ae4c4f8e4",
"assets/assets/images/food4.jpg": "b3603e5a8d063599a255845e769d1a50",
"assets/assets/images/food5.jpg": "d06acf4c3b66dd0c2170c9027725bcf7",
"assets/assets/images/food7.jpg": "8ca78651ff61e173bf1711e513629d68",
"assets/assets/images/food6.jpg": "8639de439bd0b825f8ea14c51058f926",
"assets/assets/images/food2.jpg": "c9dc1659068605e141b6841cc46ec479",
"assets/assets/images/food3.jpg": "7ed171bc833790bfb4366cb8c7667c23",
"assets/assets/images/food1.jpg": "2ed0d804cfa4b97d7b9163a396abbf9c",
"assets/assets/images/OrderIn.zip": "d5570a9b31a4893681753b3e549f130f",
"assets/assets/images/food8.jpg": "1ed47d118b6608580a41dd82fd97cb59",
"assets/assets/images/food9.jpg": "0af561f01220d309fafb34e3d7359d7d",
"assets/assets/images/food10.jpg": "e03a5f087910f52937874ef877ffbbf0",
"assets/assets/images/food11.jpg": "03838b6af85cf95922a5be8da9056285",
"assets/assets/icons/orderin-48.png": "3ede08b72fc78a9487e5e3909164dd63",
"assets/assets/icons/orderin-100.png": "5d17788ba1e0556df2f6d4f82c492db7",
"assets/assets/icons/orderin-96.png": "f14d57e3f6ad0712214b4d84653db943",
"assets/assets/fonts/SFUIDisplay-Regular.otf": "d4550c5e326a628ac8ef82e9f2703484",
"assets/assets/fonts/SFUIDisplay-Bold.ttf": "00004807645e595b176434f1c0438591",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
