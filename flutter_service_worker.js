'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "06d3ebdee65ab27a346105e139671b9e",
"res/splash_logo.png": "760423516d48b16481193292a6f12a24",
"splash/img/light-2x.png": "a6907cabc205c7b99418a2ddbc90e4a2",
"splash/img/dark-4x.png": "42c422b788d5458c3223b77595a07f13",
"splash/img/light-3x.png": "9ac10e414c38861221357f33147be613",
"splash/img/dark-3x.png": "26fe09ac131eed672f6327026134a5f0",
"splash/img/light-4x.png": "c3edc8400981870004c50ca3787d2850",
"splash/img/dark-2x.png": "d493e2c27d793846a3838ea81d653b42",
"splash/img/dark-1x.png": "1b951feffc9a59a06b7ce6d53f07ef53",
"splash/img/light-1x.png": "f6bf398cc0830498d17c8ee9da7e5de2",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "9bdc602b68ad2211258638c7d2874dc0",
"index.html": "9acd478ff979bbd43ae599b6b2b45155",
"/": "9acd478ff979bbd43ae599b6b2b45155",
"firebase-messaging-sw.js": "86eb0a044e7d6d147cd209cdcd7e61ca",
"main.dart.js": "9513ba9215f8ff6ffb8ddf99dbc42e29",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"style/style.css": "f7616fe490df4a25e7b7204d5ee25d34",
"script/configure_app_helper.js": "705ecd9cd6cdc787d02d6c42249b8467",
"script/get_contact.js": "b5c1da7c4d5ef212aa62a238717f249e",
"script/check_pwa.js": "b3d4e6f739b482746002648b54784b51",
"script/loading.js": "a28802e851e4f8797a7f445c90f0db8c",
"script/auth.js": "4d1517fdf3cb9ddd2e3e2f1d3e61a38c",
"script/canvas_color.js": "709a08a3f32891602bb07061b3790639",
"favicon.png": "9341789dfb119c9f3f9a462e4e960932",
"icons/Icon-192.png": "fe69601e819f979ea02a4fc8c2a3c7ff",
"icons/Icon-maskable-192.png": "fe69601e819f979ea02a4fc8c2a3c7ff",
"icons/Icon-maskable-512.png": "7edca39cfadfd0912874e54f93f0a10f",
"icons/Icon-512.png": "7edca39cfadfd0912874e54f93f0a10f",
"manifest.json": "788b9f5f99fee70b1ad743da7c8261fe",
"flutter_service_worker_js.dart": "5c025e8128641c8069612c0b37970f86",
"assets/AssetManifest.json": "2a39c611300d617f170549f41534c096",
"assets/NOTICES": "5b3d22d181a347fc684b9a11b4e3e6eb",
"assets/FontManifest.json": "80c1cddd56330ab0741424e615cc6de0",
"assets/AssetManifest.bin.json": "48d550b7dc6a360ed2be0327b675d1d2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "a304b9426b05d4964b43f4643dcb9404",
"assets/fonts/MaterialIcons-Regular.otf": "97732bdfb392f7f3a4d86e67d1780701",
"assets/assets/splash/1.5x/splash_dark.png": "57e9c40fc212d24efd12d4a56a17b4a2",
"assets/assets/splash/1.5x/splash.png": "c8aef8ab6eab640f86762aee7e87ad6d",
"assets/assets/splash/2.0x/splash_dark.png": "d731bae91d43741cd93e48991eb490be",
"assets/assets/splash/2.0x/splash.png": "30d4a755e48f9b33dfb99176c43e9cbc",
"assets/assets/splash/splash_dark.png": "868cf8a0328a8cd7d959525976a5b6d8",
"assets/assets/splash/3.0x/splash_dark.png": "62736a3b0d7ed9f41efb0ad9e5f2f474",
"assets/assets/splash/3.0x/splash.png": "46473aa93f75cc7185fac0ddf014a7e4",
"assets/assets/splash/splash_android12.png": "4962e537916e96817da1e2c89ef72b16",
"assets/assets/splash/4.0x/splash_dark.png": "760d6f2392cd0b428e81402742d70084",
"assets/assets/splash/4.0x/splash.png": "0bb6197a51c8494105d54a12efd38285",
"assets/assets/splash/splash.png": "760423516d48b16481193292a6f12a24",
"assets/assets/splash/0.75x/splash_dark.png": "e0452ae842e4e3c7acb501d9b7ea67cc",
"assets/assets/splash/0.75x/splash.png": "d436960de5a04c88c3bfee7f5eca0dd0",
"assets/assets/splash/splash_dark_android12.png": "d020d464283e414f9e4589797d918c3e",
"assets/assets/images/ios_install_first_step.png": "da441194a3c916a932bd85a890391a92",
"assets/assets/images/3x/am_icon.png": "e837ca4c601911dfe9de091a4fd8bb85",
"assets/assets/images/3x/lenta_icon.png": "b2fac67374a5cd0e70834c9eb2aab7cb",
"assets/assets/images/3x/mcd_icon.png": "967941a25f803859d0396bc51ccbea28",
"assets/assets/images/3x/banner_decoration.png": "a581057d5e18a1fbeb0903d849acdf0c",
"assets/assets/images/3x/lukoil_icon.png": "c6e8a086dc0a2913e8f82c0fb0a7dc5d",
"assets/assets/images/3x/wm_icon.png": "6f5ec2bda9334ab905d124fc3a8da9cc",
"assets/assets/images/3x/banner_shield.png": "4cd9c3185a2f56e61e6f783aa30c41dc",
"assets/assets/images/3x/market_icon.png": "235c6694fe06c9034998ddb4c4b7485d",
"assets/assets/images/rustore_logo.png": "b17b212eafcc83412381e3ff252a647c",
"assets/assets/images/profitable_deposits.png": "457452c8a5463fc2f2e45105b26eaaf3",
"assets/assets/images/ios_install_second_step.png": "da32f20f31d1133ed97cdffcde4f5236",
"assets/assets/images/am_icon.png": "eafac396909207598568ff23650826c3",
"assets/assets/images/lenta_icon.png": "743eda4a3ad8ab2153cb836c6205274c",
"assets/assets/images/mcd_icon.png": "58dc0d5ba7ad7888fd157e959ead99de",
"assets/assets/images/card_image_001.jpg": "94531ed6e4fe7b1fd8b675cbb2744a65",
"assets/assets/images/banner_decoration.png": "a581057d5e18a1fbeb0903d849acdf0c",
"assets/assets/images/lukoil_icon.png": "1dce94172d76acfc2a8ea9640836d511",
"assets/assets/images/card_image_002.jpg": "bbcd7d3eefcecda6633351741c5cf419",
"assets/assets/images/business-app.png": "d11e259541e749befe830c58b614c35d",
"assets/assets/images/wm_icon.png": "b5bd012c8f67a4c2c2dd0f05aab86c12",
"assets/assets/images/card_image_003.jpg": "b03fc13bb9833a308b05c960bc0efc92",
"assets/assets/images/understandable-analytics.png": "f5115c98f1f6fed40df571183e1d2407",
"assets/assets/images/purchase-bonus.webp": "1f9a36820d161958f1d51fffc2cf728f",
"assets/assets/images/banner_shield.png": "93663d83d42708520a5fde0e3a50d266",
"assets/assets/images/market_icon.png": "a7b1177d3094f3c6f0e9edda0295975f",
"assets/assets/images/2x/am_icon.png": "57b6f81360781c732b5f0c4a316c0db4",
"assets/assets/images/2x/lenta_icon.png": "6bbd8182a1f97abe3f461afd4d7ad69e",
"assets/assets/images/2x/mcd_icon.png": "2a1a02036cb032b766736bfc960fead4",
"assets/assets/images/2x/banner_decoration.png": "48ae8820536832be7a810f0fc0d1ce6e",
"assets/assets/images/2x/lukoil_icon.png": "2af16093d6ad365a405989ae88bb31a4",
"assets/assets/images/2x/wm_icon.png": "60540717493a3b8bda5b43dbd1e46789",
"assets/assets/images/2x/banner_shield.png": "1582939d75f091928dd43857ba60cdca",
"assets/assets/images/2x/market_icon.png": "0d8c784ad3e6ee66e1f6c2ed9d8a6255",
"assets/assets/launcher_icons/launcher_icon.png": "c8ea45ad26670e34e8f110aeb6edb07a",
"assets/assets/icons/passport.svg": "908f9e90dc676da4811be57628b7773b",
"assets/assets/icons/search.svg": "fca0a596b3b452e3ffdd75483607bbe2",
"assets/assets/icons/Method_Visa.svg": "479db14d21831150d76689e16672834d",
"assets/assets/icons/debt.svg": "fd162b30180e716977d3e0a6df38c928",
"assets/assets/icons/friend.svg": "da7bb68c4ae7de3dc854b000e9141e98",
"assets/assets/icons/icon%252024px_clear.svg": "174ff45f8388c59f6588c04a7143bbc1",
"assets/assets/icons/ic_main.svg": "76f70f80610b46021eda8e2f0d280194",
"assets/assets/icons/request%2520money.svg": "70a63bbcd7521c39cb5f712c3dd8b5f3",
"assets/assets/icons/silver%2520card.svg": "7abe891acf1f1d33c239940c5f220da7",
"assets/assets/icons/add_icon_yellow.svg": "ff80c3c4eb277ba6f3e2650e5b4c1787",
"assets/assets/icons/face_id.svg": "1e82f219696ef194176bfafd08ecef5b",
"assets/assets/icons/home.svg": "b69c49d2130c2713476d0bd38bf28009",
"assets/assets/icons/by%2520details.svg": "0bc441a4f378996579dc4ec76e591440",
"assets/assets/icons/cancel.svg": "b67616b89eb633724948d1049f49542f",
"assets/assets/icons/ic_plus.svg": "8d8f03181c5f03b00ce26eb74abd8b81",
"assets/assets/icons/qr%2520pay.svg": "0fd36ee2a20e5528d165dd9e1e165626",
"assets/assets/icons/credit_card.svg": "ed5613a1067261743961078f9e2cbb79",
"assets/assets/icons/services.svg": "6cce486434c6134f65456ea252810b94",
"assets/assets/icons/ic_minus.svg": "b76fbe35a7ef6db9e31aad116007fc12",
"assets/assets/icons/service.svg": "a4c7cd57e815b8bdf72f6794e44fdf69",
"assets/assets/icons/between%2520accounts.svg": "0562ea0650dcdd363c7d71bd90ee0c9a",
"assets/assets/icons/purchase.svg": "11d72e763eb37488335e10f6bb439a91",
"assets/assets/icons/service_colored.svg": "97a307d224902fa46271982515069da5",
"assets/assets/icons/add_icon_green.svg": "0d0861ac564721b0255552e25e1a324a",
"assets/assets/icons/withdraw%2520cash.svg": "373277314de8e82da87d6678f9322e16",
"assets/assets/icons/settings.svg": "44ac8ce292b2a760773b3b4c651f2e90",
"assets/assets/icons/arrow%2520up.svg": "ad50b7929632415a2707c0a6394acded",
"assets/assets/icons/transfer%2520to%2520card.svg": "2c894d2e313c1f69d064d480fbd9f281",
"assets/assets/icons/tv.svg": "3a9cbde481e5c7f7bebe4b00eead9a40",
"assets/assets/icons/card%2520transfer.svg": "7d1a40b3ff10827cb6305987f09f85db",
"assets/assets/icons/card_red.svg": "e9f7a6a06d52b79a9d30670572749614",
"assets/assets/icons/notification_on.svg": "16a5b505ac84a72555f6d3e5de18cdf3",
"assets/assets/icons/arrow%2520down.svg": "2c4342b2a2a39edeab44328c79045186",
"assets/assets/icons/Method_Unionpay.png": "f53ee6194f5a50bc848996fb2e72e1dc",
"assets/assets/icons/internet.svg": "850c798304a9bef46090057fb70247c3",
"assets/assets/icons/arrow%2520right.svg": "1032b8b03dc46b2a6b5588aecc02779a",
"assets/assets/icons/dashed_border_plus.svg": "c3ce96f7330b2ed0ce4abc650db31063",
"assets/assets/icons/auto%2520pay.svg": "b8ad366429f744e946e8c9c14f4bdab6",
"assets/assets/icons/icon%252024px_info.svg": "be03b1268d4861096114dbcba98046f8",
"assets/assets/icons/chi.svg": "975b9f56d8f3c8904b457fd024c39a57",
"assets/assets/icons/card_savings.svg": "b4ea658de060330b0075f736f1e4bb72",
"assets/assets/icons/chat.svg": "cfe7d6d13bca24228e0d4d052298d55c",
"assets/assets/icons/phone%2520pay.svg": "8489d026642bdf4297691b7138c72765",
"assets/assets/icons/pig.svg": "79128736a5392a87650b316240474e1e",
"assets/assets/icons/sun.svg": "a89807bd8125cc97b93ca37a2494978b",
"assets/assets/icons/arrow%2520left.svg": "c3b7a959ab59b3be70f357efe80b89f1",
"assets/assets/icons/public%2520utilities.svg": "263f660d599792a513d32fd2afebecae",
"assets/assets/icons/arrow_right_gray.svg": "75aad2f105e5c933bc5e5c6211051f32",
"assets/assets/icons/purchase_colored.svg": "842e5695c7546162695ee7479bffe357",
"assets/assets/icons/exit.svg": "d6a03d9a7cba3344694e59d6d0503a7f",
"assets/assets/icons/phone.svg": "8b127d194c16ff42490217dba42c1b88",
"assets/assets/icons/call.svg": "17c593a50eb06ade89593e981c3b6410",
"assets/assets/icons/notification_off.svg": "8bb673cd5595ccdb4cd86f5af07deab3",
"assets/assets/icons/car.svg": "9662ea8921b306f4c6a07a4ee8f42325",
"assets/assets/icons/gold%2520card.svg": "de7f0ece44c6b7cb6671738a8bd1e262",
"assets/assets/icons/ios_share.svg": "d01c2eca984648649ace7faeffa5ccfb",
"assets/assets/icons/credit_colored.svg": "458d2f9a23952959d01cf3b2a05fab9f",
"assets/assets/icons/calendar.svg": "caa912a3c458bccbb411917117b4cd7c",
"assets/assets/icons/eye%2520off.svg": "0dabc3aacfe55b73e7274b01c3f517da",
"assets/assets/icons/black%2520card.svg": "2918a2e88572ea848beb79d25412563a",
"assets/assets/icons/payments.svg": "69998ede62a2242f3cec07452e5b4a1e",
"assets/assets/icons/Method_Visa_gray.svg": "dc93d4cb52aeeb2413e7c9417a678e79",
"assets/assets/icons/transfer_colored.svg": "a12d1a86106ecda6bccb0ba907f76964",
"assets/assets/icons/eye%2520on.svg": "5418ec75ecb24163a8e9060e1d7c5112",
"assets/assets/icons/social%2520media.svg": "c85ec8aa4b8026288b72cc09306a838f",
"assets/assets/icons/open%2520an%2520account.svg": "908e1eb65598187d3a826c017d4b8c85",
"assets/assets/icons/Method_Mir.png": "c29f3949ef0d3a03a61c05555eab3290",
"assets/assets/icons/mobile%2520connection.svg": "7bbacf0117bb258518ebf117165eb97b",
"assets/assets/icons/debit_card.svg": "1fd19801b5643e86c4e060e7f0f659b6",
"assets/assets/icons/history.svg": "60be14e775691f51d6f84e4e6d5bb545",
"assets/assets/icons/sniels.svg": "18b873bd7ed08fd0bfd025ce51e13904",
"assets/assets/icons/Method_Mastercard.svg": "83d83f56575b37379c935dc21fbfbfd6",
"assets/assets/fonts/Rubik-MediumItalic.ttf": "510d0b3b67b4b1073bcaa961b1d8fc6d",
"assets/assets/fonts/Rubik-Bold.ttf": "f70066a21af08705d0503ad692446de1",
"assets/assets/fonts/Rubik-SemiBoldItalic.ttf": "8f5f4daa5488df8814ffa00cdae5ea4d",
"assets/assets/fonts/Rubik-Light.ttf": "98df4209c27b1be565511cc954fa307d",
"assets/assets/fonts/Rubik-Medium.ttf": "bb476f36e32039a411d1f3afaf5a81af",
"assets/assets/fonts/Rubik-ExtraBoldItalic.ttf": "df3262d88de88ab5b32e47c2b79eb964",
"assets/assets/fonts/Rubik-Black.ttf": "f7672ebc1b97272bdcbb9212f05f263d",
"assets/assets/fonts/Rubik-Italic.ttf": "163a47c632b9876470b6e78922adbaf9",
"assets/assets/fonts/Rubik-LightItalic.ttf": "7554406307bd4872a640e69b56317f5a",
"assets/assets/fonts/Rubik-SemiBold.ttf": "75600733020f310eca3713eee83ddb56",
"assets/assets/fonts/Rubik-BlackItalic.ttf": "4189902bdb53c83f1ee124beb3ce7fc3",
"assets/assets/fonts/Rubik-ExtraBold.ttf": "9f8c4a8202ef48c56a027ef49fbb2e35",
"assets/assets/fonts/Rubik-Regular.ttf": "e100d91366c744a9fcf055b7c5af9961",
"assets/assets/fonts/Rubik-BoldItalic.ttf": "8d5522a532a05a5a962b9e336261e1fb",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
