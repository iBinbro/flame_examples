'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ea2082ad5e49ab2b9872c5278c254154",
"index.html": "16df45643df317663ce72959b3d0dd32",
"/": "16df45643df317663ce72959b3d0dd32",
"main.dart.js": "3426671eacee5d01d14316ab093658ad",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "faa542984417ba519e9099c59cb45ce2",
".git/config": "87647df1e681adfe75e2934e8fb40529",
".git/objects/92/14d8ccc57310c0a89824a0d138a96d2568edde": "83264d5cdeb40426586f492c969c7d0c",
".git/objects/92/5aee962a156b74030880a85c5d7e69d58b798e": "9591bcd25d24edf714f38e461fc27cf0",
".git/objects/68/19f8e14ce4d5485003aedf2d4a79ffe4526b35": "5dc5574df04cbcced3935f5ab416c2c0",
".git/objects/9b/efbcc0c470edc6cbad1974cc7e9093a44723dd": "8e542710b06b151672dab5c5d15840a0",
".git/objects/94/47b801ad624648626ed65b5eca9a0be33e8e94": "4eb9bab74d4bad8a74d4344c40ef5fd4",
".git/objects/94/347d1d4d4b84662a73adcf19e73a74d9ba81dd": "f39373cff9d0f9f2f9edc67511999087",
".git/objects/02/eb2e3da908116023e935f17c7be6c4272733b2": "6db85df77de2d443740c24f55540c970",
".git/objects/a4/2ce31eaceb0655e1b5efc1e3d4d343fb788de9": "8451790c3179bbbb3df6a9821de3fecd",
".git/objects/da/59c348a173f1dd34ba2a372ab0785117e21d42": "a86e013e420d1cbde433ee17e0d2d5f7",
".git/objects/d1/af72a2201f787e7ac94a1b9c4f3ff0ba35a914": "1d0a9507c9d3dce3211d1f482fcfcac9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/12ff2b167c5996fe44c0f62f0296c3d53a9100": "fe854340a62265d45cef9f82cd5f2eaa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/71a3a1311f4350997ef8e000e56123896a6d59": "d5fc307a60d38d75f936c15604c33fa7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/9f59ecdca78a87211325ee735be19b3bc30c75": "a0efdb527685d7f2b1fb0402b53d2eef",
".git/objects/e3/64e9718b5b08adc6eeebb35e8a64484499961c": "b468f0a13b782bc27ff290d17f5f7ae6",
".git/objects/cf/040f76b9c58a3442271beca4b00e886b961f7e": "232af1e64cee913eb5be3097c4330e5a",
".git/objects/ca/0352304cf32243d85b9ab48f34e2fad1e850d2": "39e42b712236156ac11fa4b0a849c33b",
".git/objects/4e/82fea2af6a6cb82a241702a5a243acd51c3584": "af22c37384a284061ec899194cb93d7d",
".git/objects/20/93eb686033ad70fdb6831c477de543229d8ba2": "bf635393964fd95aec3ebd43be1b74d1",
".git/objects/89/03b602f4296b129bc7cc01eb555b444917af2f": "43d969a97b2417790e83902e8fe1f713",
".git/objects/80/d8176d5a8852fdacf826e73da4a5b4b5d6d356": "37c8316714d662be3249fd4c67105a75",
".git/objects/74/c3d6818cc968b2ee07079b20826f7c7e2af0b3": "2f429060454085939c26a2bb05278f17",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/482956e1184c1ad69918191ac9309880ea8f46": "54d05aa98874ac5c1904d152e6b151e4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/b3fb81db4f82339a70167f7c68e71832b6684f": "7181028f682bad0e283d77c5b2be3db2",
".git/objects/36/c6a211c109c5ece23129a8912dcb5d2f822402": "c088df599ee514aca4a45751e7acfcf7",
".git/objects/31/a6c9a332c9b5d332d95bd932800a0cbff1dd0f": "40dd32429edd9f7eee6a6a3191a62922",
".git/objects/53/b549634a431d4f041945be983a24fd02068870": "7e53b08bbd3da1dc03e625b9bc2d92d5",
".git/objects/6c/adc9d8f43d3702efe6b519649ea0facca5984c": "24b3a437f48506c064ce30755b565247",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/d31ca2041887ab57ab267f3d617a35473e0daa": "729eef47ef0c5b688c6e130468886e08",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/4a/1274e170fb1faf3ad91353d0bf5720441fd218": "03705d4900d3445bc05ee4a1ccee8975",
".git/objects/15/c2c805adc33c0749c8994eedaa3652c07a2c46": "5f419f714469190d15b93f831a01d8d1",
".git/objects/15/0e7a95996c27970f14733c35718cd08b40627e": "eb7fe957fa5fb7d713a7c71bd783a001",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "7dd7ccfaa14943442bb4e6433e43ae59",
".git/logs/refs/heads/master": "7dd7ccfaa14943442bb4e6433e43ae59",
".git/logs/refs/remotes/origin/master": "4b1942c4380abcf6c1dc0cc0b6c36159",
".git/refs/heads/master": "4545fd1f439d7c5c39789ba1c9f1216d",
".git/refs/remotes/origin/master": "4545fd1f439d7c5c39789ba1c9f1216d",
".git/index": "fd55abe31bcbe052adb01707e92928a1",
".git/COMMIT_EDITMSG": "b7db6467ea24b98122da85b3e1e70c9b",
".git/sourcetreeconfig": "df0edd7cd5d86b4baefccfea41f1ff43",
"assets/AssetManifest.json": "ecec9e1b5dfd301a0d8bbe0e8066b63a",
"assets/NOTICES": "c7b948acba803d92ac70b0a67633c7d2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/bullet.png": "965651afb7b9591b9a8e67714497e864",
"assets/assets/images/flymonster.png": "145f9b0dd9eb7b2ac55b5a01e20b9b01",
"assets/assets/images/parallax/plx-2.png": "53d9e937ac94613d7d408fcc50fa67c7",
"assets/assets/images/parallax/plx-3.png": "b50ebfb91131365a479f229c0325c033",
"assets/assets/images/parallax/plx-1.png": "25c49cc12aeed4d2799dc9fb52e3c213",
"assets/assets/images/parallax/plx-4.png": "58662c8e1ed9bd74717dfa54df862788",
"assets/assets/images/parallax/plx-5.png": "552941c58ccaa9782ebee6496e77e003",
"assets/assets/images/parallax/plx-6.png": "07b9aeda90128cb6e63954f56d0af5d7",
"assets/assets/images/player.png": "b35f4dbe1513c61146da143674613790",
"assets/assets/images/Spritesheet.png": "91343291ba011127b7a31b59671e5f4f",
"assets/assets/tiles/Level2.tmx": "056b1c2c88a32e1c65149f8b1088eb7d",
"assets/assets/tiles/level1.tmx": "b30610de53702e123c6681ac8e392091",
"assets/assets/tiles/Spritesheet.tsx": "3714cfd3b41aaf81401ffecea3f1975b",
"assets/assets/tiles/player.tsx": "9a14d983dcdaae8192532ed508a1e438"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
