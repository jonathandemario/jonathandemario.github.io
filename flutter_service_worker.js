'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b05061ece030716876564f83f2baf074",
"index.html": "6f81f05b69c15a682381e744dc82a607",
"/": "6f81f05b69c15a682381e744dc82a607",
"main.dart.js": "43e6aa3700b8fa6a49d234bd57e3deef",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5d17788ba1e0556df2f6d4f82c492db7",
"icons/Icon-192.png": "5d17788ba1e0556df2f6d4f82c492db7",
"icons/Icon-maskable-192.png": "5d17788ba1e0556df2f6d4f82c492db7",
"icons/Icon-maskable-512.png": "5d17788ba1e0556df2f6d4f82c492db7",
"icons/Icon-512.png": "5d17788ba1e0556df2f6d4f82c492db7",
"manifest.json": "b20f701d899b03c6f6083627d8480121",
".git/config": "1db02d209ccb684292b315652134e614",
".git/objects/3b/cb19fda9080fb2f487d612a948a4a83c9b80e9": "01d279658d55f1a740d6d4a6e0edeed4",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9b/5bc8d941aa37dcad08f8884533eb0a415d943b": "5d6ae0330cfc73e2bb628ffa2fa8c0ff",
".git/objects/9e/5bee142a66128ff2b29146b934af769906d9ab": "ed3f06ec3cb0225d7f530f26ecae18cb",
".git/objects/9e/334c13da504654272b1681bd9f1ef533ee85e6": "5dfaa9093ca6d08638e2804f72aad9ce",
".git/objects/56/a04caed5b3acb2848f52b95cc3de2d0ae62a46": "10ecfe9c3e9e1eb010e2009e4ff14285",
".git/objects/0b/d72a616eab53f3d86bd6247b5daa98e84da392": "9ea218f940a72ced20576a221f60a069",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/34/b24349e357e0bfdf3e812bc992b8305a404455": "d9fec2bad62401a022fee2e6394b6756",
".git/objects/9d/0ea875fe88321f12823d30b06ab4e3dc9c22be": "489b2da986af2ee5167cde834e0bd3bf",
".git/objects/02/4de560e229a2673091f3a953952b89d09f0914": "4fd3a4d2ea3ea9129a080ac3df2f7e1e",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/30318cfa358e6f40612a4aeb71ceb3d2d530c9": "1f34e82ab4ce78fd53e61608903bf896",
".git/objects/d9/ee0e134838ba8fdb8c32f414dbaec2e8ea7c0d": "9f29b60489a0b2213e3e1c56ecba95c0",
".git/objects/ad/37218ebab82843606a258fcfe3e401820355fd": "f41d32b50a85d8c83df2680b9f88d141",
".git/objects/d7/a0c6c4ea811f26d38e284c499091b02486664d": "877d95f794d7cbb6ae19f3ff84113cda",
".git/objects/b3/b4f07f3c3f7be92408cec94a0f2c7ee0149c6d": "c424ee6a8d0c341b508b01bedf20d236",
".git/objects/a5/24409076b1a0de9928c37139c23225063e1636": "e13d76422d52363d17385f7f142b4706",
".git/objects/e5/40ed5a054c8a1e4ea694dd3640c4a4eea2c0ae": "a7c4d6b3f4994261ea195454fcdc4e7d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c6/4bb3a3be8fa00e67ac20e2981c4ed1069805dd": "87f238c50be53e0035787ce617376e6b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/d6697993cb868794b4c9643ba07aaeae17c76a": "c9f21d5cef5d53751d3e3b9e66d0c44f",
".git/objects/80/36fa58c126f73f47d55986861ec1322d1c86c8": "bb49003ad6d1113a5ac7f3529e55b432",
".git/objects/26/31518572d335358c445a87824d28f8b0b608b9": "0957a2961e2dce29f81468943176040b",
".git/objects/4d/463a2d9ff9330c145ef859c6dc7d6c0fb2e105": "b8f7cdcaf02b2f6b6f2a7215e2a44512",
".git/objects/4d/ed0203e91c91fec4cdd1baef8ee4d5b2ac3292": "9ab9961a0339856f6a0aea020cf1e97d",
".git/objects/72/41430c82a11a4e881dacf170b7d2d0a26b25f8": "51dce3d199a45b7797003ca09e43e66e",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/9a/0519ea8244e53951cb038e485f5f90083a0e63": "3b061465082c068ec91d3d736a3a66e7",
".git/objects/09/b88990b84113b53df1afd780db8ebf9833ef76": "df1747c527d41c6fb324efb97b84fa5b",
".git/objects/96/2a2698e2cc07c583dd40160565550c41652d18": "221bba3589a54056cf282e16ba15e23f",
".git/objects/53/7fd3924d4a8c04c51c1b5bd6d47f2823b54571": "d7ecd7a1cf6e7e11273c94a01a508b5a",
".git/objects/39/5f48e8027c7d9ce4d1d99e3d08b5fad6719747": "211a4c8d9522063688ab2700f5152251",
".git/objects/55/52bd676feba519db4bc5e58c0fd523fbac3232": "5ef5dceac9497a85dbdff2a63f665b28",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/076de1f600a413557914cad7f21ab687b59433": "26fd35ce8ffb8c9cfea3afaaddc53a25",
".git/objects/b8/4527a8357bfa925926a3d24f4fe2f6ce66e700": "f008fc773621a9c6aaa6151ae6de064c",
".git/objects/d2/ac7e80aeae79c8d713fd6fd56f06a962ad2796": "c6527f1d1c5f10cece8898bf7d434737",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/a8/9cd3874ac90c532d489ecdbfff2cdd3f729d5c": "c7d0666c756a5e09b2ac9702668acc8b",
".git/objects/a1/6a87e177efc65a7fcae18a2581140fd97cb441": "9a1c3af81eac87879bda01a0eed93e3d",
".git/objects/ef/7a5fe21762085c0e6c845869c2309f02944c78": "5d150acdaedc10f93fdae1af899b39a1",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/83/16e518521372f5e2fa643c6883c2d9369dfc39": "55a3bf108d0a40e3e97f7b3fff32170b",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/8c/872d023c6e367b9e448f7346a0ea51434ed6a9": "8e4d5608920f7f2b3542cbfeb920f09e",
".git/objects/85/0b137914be4ea51745829f59510b116220944a": "7ae3fe2b3954268d4bdd2c9299ac5d36",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/94cb84006fe6ea8cee7adf3812df374a8f2a9b": "c9f9d5d633f8f2f50b69d9e25ce6d76b",
".git/objects/1c/35635eeaa25395535855c88cf6212dfaed293e": "0d8c8310d499fd0bcc142f6f5d98f365",
".git/objects/7f/9360e8473e92e8deb9cad1c3b98935a65f0462": "9d8fe87885a77c762aee70becf84268f",
".git/objects/7f/160edd7a31ac3a42d850b96f677ad9d972a147": "8802655a78e1762d5a6f9f504031bd8a",
".git/objects/14/9d3b42dd0367d82f7be15531c94f14805bbed8": "2c93392e3a84bb132af354f22108642f",
".git/objects/22/394cd48a29568bc972ccef2287c4701e8bdcd1": "be1fcdec03ad11b4caafa458a5cfb5f9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "73d8b469cbe06f448b883075126028bb",
".git/logs/refs/heads/main": "026d94b16ec24437ff4b23004356d351",
".git/logs/refs/remotes/origin/HEAD": "3f68d24191e584ae8aca89b30f78284b",
".git/logs/refs/remotes/origin/main": "cb36ae5f649b1ac6f564df97e132ef6f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f504dbf24f383623641940443313eb92",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f504dbf24f383623641940443313eb92",
".git/index": "178a9e6de2556e072904990bcfc27d32",
".git/COMMIT_EDITMSG": "aacb8b6023f7a7d762d10347ac181bfd",
".git/FETCH_HEAD": "4a5e5399bb534cd694475e12f2a763ed",
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
