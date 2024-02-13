'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b9c1e930315c245fe85972c0f4e9358c",
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
"index.html": "b09495da38e1ebf84b315e26a9903864",
"/": "b09495da38e1ebf84b315e26a9903864",
"firebase-messaging-sw.js": "86eb0a044e7d6d147cd209cdcd7e61ca",
"main.dart.js": "51df34e587c4dbe0abcbecb139222b5c",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"style/style.css": "f7616fe490df4a25e7b7204d5ee25d34",
"script/configure_app_helper.js": "705ecd9cd6cdc787d02d6c42249b8467",
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
".git/config": "b3e4e252744208197cb60ab3883b5f0b",
".git/objects/0c/0517cee73a98e4360aa5233cd2e46eb4d24aec": "85e3afc34c7659f73df5fcf31907f0e8",
".git/objects/66/d6b86cffba5cbeb1acb58e9230f9740bc064a9": "ec99deb3b3df700b4b49d5b130ba4e91",
".git/objects/3e/f71d215b332d495aa61a31d9ff59688abb9d41": "7c97d68a659868c6ed6f1aec06f3c3e2",
".git/objects/3e/0c828a7396ba1b38eb98677d22380123c05bfa": "2644fdc7366edef8a56b3b8babf11d0c",
".git/objects/3e/d36f5734b18430782d26fa76f4f0f5a7fcbf9c": "097acf960d0eb123b926cd637c98efa8",
".git/objects/50/25554a21411a9ed5aed7d4e0492e408404c18d": "8c9f77eddeefc121c3ada73dd111f4df",
".git/objects/68/dda2cac8e3d4993fa68e1ebe90d74b3f5b293c": "40fcee42b60fc3396bfda3304414f52d",
".git/objects/68/60a26cbf47d485ebcdd40e1b9fdaa1368ea973": "015cb2fdd18a023a832c794d2a9c0dee",
".git/objects/68/6365ffea1f66bb1f81426e5cc0143c49f96658": "9b82394a3096dcac7715e363f3041b3e",
".git/objects/57/7ed78bb2441cafa16442c7f4a08f9c1d131d84": "240c2d6650b58ab8f6f6f30bc90af3c0",
".git/objects/3b/af48744630fba2767068719db6288ca7a46ada": "560f90281188874c51e482ab0b8b8726",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/8de2fc603bee3d533793959329c4eb7f6f215f": "b5b7ca02f25ef0158a3c5f5ea7e66463",
".git/objects/32/d2e3f4ed45e5d6e83462b344c4d4797de512c8": "3c2e032e808bf950d9b57554b58a8973",
".git/objects/32/b045a510ad0ddeede8fe5f09c3c90409c6e427": "c42ff43b4213d3d4f4ed1131553cb942",
".git/objects/32/5a098c1c7b1896b8a6bec279833ac328cc7c09": "7edf1617d1115d5682ca866522e8d4dd",
".git/objects/69/caeaa63a6df68f58c957c0eb6ec73eada77875": "ee729ec1c061dd15cd63ae7acdd5a273",
".git/objects/3c/4bd9b3620f790c8592d8cd7e41777cba6c9afe": "19125d4500a77dad34a69d6bd9a125e4",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/58/408e0bdad4aa8a76638a5d0bd2ecaf4e1a5482": "34b12ce7cc9287ce3282631dff17aa53",
".git/objects/67/56e1936cc3e39ba25daeed5a2543e03a192584": "793bd124961ec1853bd597996e9793f5",
".git/objects/67/a6588130a88b5edacf08433e6e1f17c8a33511": "3296a17eb2cd79f963e438d8153f5e8f",
".git/objects/67/0c1a18d93ba08b12cd9df60c67cb5b304c9a2e": "c78ef6d633b89ebca8315b00a3014263",
".git/objects/0b/9e746d77ccac65bf438d35e8b2cf81951c300a": "209e28e61bb311fe9b19944a5cfaa06b",
".git/objects/0b/aedd9bdc0a9f3610b446646acbf46341bd981d": "3fd0d77aa150e6b65a0f93bfe5fb7620",
".git/objects/0e/2a6f4b74e10c227acdb9df7fcda450b154758f": "e2897f2163e130783dbeec9150596696",
".git/objects/34/05d12a25d59ec3eb9e67342b30677fff55b60d": "5eb2d06bde6baee932eff32ac6f57f8a",
".git/objects/5a/77b68c100a66af1d49235ce33f7fff55f2af6a": "31d65aab99ce57a919e27f8908d0f563",
".git/objects/5a/22d6324961e57da6b968dbb34ed6c78bfd072d": "8c0e14410177fc03472ff28c6ce48f49",
".git/objects/05/893e31e17e5dbbb4cb4e21ce3bff8d8ca2e707": "7ccac542d1ab46de45c5e543775943d5",
".git/objects/9c/0ab4cdd3efb992f485d5ce7b5de1fe87db04fc": "75697608f994c04d8c8259a4edfeec09",
".git/objects/02/515780de1b6c155fdc7d4e75102fd389d095d7": "5603d9a69839f7671442c0b0fb026753",
".git/objects/02/06e64d1da8ccc38e522d28e871e466ebcab8dc": "10ea1046141209d7be807b2535643b2e",
".git/objects/b5/b06096b1a27daa6c49d34138c9897d78818782": "b6483fc5999ea732c6aaa5cbb7aeba7c",
".git/objects/b5/925e5c68281d25559499774dec5cd7670d9ab2": "7748d7dc6dd63d2becdac7611dd1d8ed",
".git/objects/b2/33f4adfbd521a48d703736d6d4bee0b435052e": "d421eeac0139022985996c13621776f1",
".git/objects/d9/e0f4b8def81c278a2dd9b5ace5ce2329edbaa2": "3e4ba2d9be7b56a4df9e524b56d568c8",
".git/objects/d9/7b70f950f192866ab3d73424837f842d5b215f": "856ac651eb8ca23e690254d05c90ba69",
".git/objects/ad/088547c43460a0ee34d15dd527b78c8dbac310": "d856856fcbca32d5e5a4597c4eaade28",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/6676cd9269cbbe567924a459240004cc99eff7": "11a380876111e4b45d2236fd518890c4",
".git/objects/d0/b2811a4fa660b22a93d24cd4d8d54e32c6c8c0": "9529bea54d43c6a803ccd84514f05a31",
".git/objects/d0/93fd80cb9e9b84c90480c2db56285f42050f05": "c144f3aa32884973846c761969506e9f",
".git/objects/be/66b2eec7684755f48dca749342d1e9289085f8": "72d03bfad590a312299eb4f822507961",
".git/objects/da/7ecd5aaab6b442580197dcc20b0ee0bd64ca6a": "68679994d7c99490cffefbf62806ff96",
".git/objects/da/af6dc76dfd11d1ae5410ee2bcde84d3a65310a": "7beee8b2c02fb9dea43f8f3020690eaa",
".git/objects/b4/bc3c223b6734d5966e22126741c4bf1e5d3c14": "3d5852dcaae65992b5cf8961ddd35ee6",
".git/objects/a2/f65b31a818cc59710d343fa8cd0666126a7129": "78d40c470ba2e445edae85eb91e556d2",
".git/objects/a5/a77bbf9571da63b2e476ff3133862c1bbdfa84": "8084bd789e887742190b9b2eb87fce57",
".git/objects/bd/a3aeab0cd2243f78c2db8fc8d239c50e816a0d": "587c9e274ebe52db336f9297053193fe",
".git/objects/d1/1cd5424961b9d5a3927c7fb5f2dfc9395b44e8": "a5e229054a5a54b7938b339132374868",
".git/objects/bc/d3741d195b1bd1c91dbb2d44c371e91fd2544b": "5e5a6a4723c61e9858f78c32180a05aa",
".git/objects/ab/f5bcc14334f46f23097e13f86142ba74cebd56": "386c082a1b8b20b9e35302de64abfa47",
".git/objects/e5/721c717cb0361725ce0e5c39f847c497719dd9": "3a5b2c8fd7230eb2e584855bf500152c",
".git/objects/e2/4ae1474d2f5d00c75c365cc84dad898b9ccc97": "c3a2dd0c4881af893667c2c1e3fdf728",
".git/objects/f4/03d4d7931e28bd269b39e7a30320092aa9070e": "34b24de667c8a9b698f8d8f47b21b723",
".git/objects/f4/83780f43b7960fd17fecfdfa3d7b10f6b2832e": "ba21ae76c5d1b2313db1a8e5e624baaa",
".git/objects/eb/64373cd3af4a02082b8dd137236a756bff114f": "ef0487aebf19f80dc51da590a876fb1d",
".git/objects/c0/389313bf9ce60f05dc98dd5ba536dedcba6825": "bba3bad2760f55625fa4c06e6f011ade",
".git/objects/ee/50372d6d0e1fbb2f6ca6dd66afbfc3da7d44b9": "1accd3e77cc6222051d44cf415e3dbdc",
".git/objects/ee/919a44051bcf714969aa7eef616f849e2856e0": "614a17b650b2353db5a2e800e964ad7e",
".git/objects/ee/89ce93230da1d95e0da4c3ce539b8bb55c6572": "4aed15cb8501606cb122b05abe8c1252",
".git/objects/c9/d4c7857e0f3bd74f332970bedbee506222cfbe": "e68c90f0fc5ba11517c59d1a2300edb7",
".git/objects/c9/1b47425d3bd79c993462372ca3c1e65a4981c8": "43492fe9aba4c45a12b4df2885f3d9a5",
".git/objects/f5/d1b2234b7b3be69c308be223390993a8e00e62": "714ac3558072da74f815b8fda9f4c492",
".git/objects/e3/1ed06f25b01430d190fd86677911a4d27162b5": "18fb193ebf0980a25435b446405218b3",
".git/objects/ca/8ee2cb0986c8893aa67f358ecfeb348794d653": "00e60456985a7e164a9d522d1b92e3fd",
".git/objects/e4/57ab56a4103324d30e7deca05bf3c108e9be9b": "8dafe8aa7af010d725fe3ecb35ab6901",
".git/objects/fe/cb6ef924324ba2fdd1ec77b24b27b0bacc4adf": "f88b53d24a5ba3d6a4462defc020731a",
".git/objects/c8/1696ecb4946a45481bc6ef46e31ad5808c83ef": "a187716b978f61d4044885779455f357",
".git/objects/fb/2f4a1858da5e0fb6091a65e649ab322ba42d27": "cfd64472bb4dce7224e0e09690954419",
".git/objects/fb/ed903e1b69678aaf1c639a7f93994a9ad4c1ba": "65e51fca860f372f6c5e0893c7334494",
".git/objects/c1/33c90399d1d71854fd271b943eec6cdc01e353": "42aefa3ee454510e1d6dc7157f019711",
".git/objects/ec/d895f08d6041060b0db2c424127c7103855a8f": "3316c04ce24624f4bdcb44cd660bdb5b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/03ff5146adafaa0a0341e10aad470c1580a02b": "acc035a61407079554e6256d820e1fc6",
".git/objects/18/a3a7cb20c6247336fcc73e4595265f15ce63dd": "b758f36b49631428dcd3c8c419e2dc20",
".git/objects/18/04211b646b432106ce1f57479bc390e8cee569": "7acd7bfb409edeec0de0ea332261ba24",
".git/objects/27/0838a5ea5be3e9d8de8263d38a372e6c41877a": "bd3d361dd4fe22f86ace1cb5c0082137",
".git/objects/29/e45fbd8a4d851f41693d7922ca379e2e3e1735": "2853900ed76366c2ccfdb12f2e3babf8",
".git/objects/42/12cba4424a9e02f5485feb4f74da3c0953b94b": "213300456abb6dc3718ad0839b83548e",
".git/objects/45/756478fe108c358ac93081570209710579e110": "b0a468a1e389110754e403b4c8e91e68",
".git/objects/73/6c81fa99518f6db9243fd002c761099ce414be": "36c198c456539705435c0b1e8043d9b8",
".git/objects/80/eada440cccdf8bd11b447f552b8631c73bfc2c": "c77ec76d419e4471a0145c6df03b5078",
".git/objects/74/07fbd6db7a075f0b45503654ae583139eb3856": "f8a2e0670c624c3f183594827932b99b",
".git/objects/1a/2eb5aa7a8d70f8c058363397fcec539ab8dda6": "53c23f023fe7e097b10a969fcaf8d399",
".git/objects/28/964b79602e583b1e6320482057b9f31b29a790": "1e8d037bb11b030fea18e7ffbceebc3c",
".git/objects/7e/696c4fe60ddf45398d91088c9e605c9a7c8980": "dfe800ae8c814992d4137838c70f6b4d",
".git/objects/10/fa4d3ff279e482c6b85533451d4634b0330b4e": "def1a0ac79a9d838065e8f1a3bbb5c4f",
".git/objects/26/59420aff7ddf632105c9d5bd9ebc12e87a1740": "daf59b9f73d5cf7a9af4517aba85d460",
".git/objects/4d/5d1508b974066bf222d894fae4ee0e6eeee2b3": "533d70df272ac7decddb17af4f7091ee",
".git/objects/4d/e2718e673b874cce967fc6615dc72fa8722448": "e1dc8df01d463499aac91725d1096694",
".git/objects/75/979a48474df7367c8c7462caacbca934c233a0": "c78dc55997f1261119a6e35788fda0b0",
".git/objects/75/08c934440cc78ec14e9a7aa287552968efaa38": "0b6b43b30f9cf02888c702dc578bc587",
".git/objects/81/c47eaa97fb2c46c7cb5f2f9b1e6ec1664556c4": "4f258480782242ce2bc0553d38d0d363",
".git/objects/2a/a5d50dc702a8cdad1f402481bb1461cf0820f0": "86bb04f73aaf28138fa5ae804e41bb12",
".git/objects/2f/354a0f796bd0744d3cdd686c9ff0fa4b0e16f7": "8d9c3c79fc40cc946945fa8b043c36a4",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/6b/4874d251d881e1748a35017db0f59c0e1c9f0c": "0de4e256ffd778fc38236d66630fe15a",
".git/objects/6b/bc4b7368be7fe60f411e2d55342be4d109f99d": "58d662be2efd70d68e2b41e75b0aae97",
".git/objects/07/447a7443a69500ecf1952033f721c9bfbdd6f6": "1e55b05fa39f87e5f072144ed3235087",
".git/objects/38/6b2a1ede157c1565e73f4a6334b3aa194d6b5c": "d237a476ab17f03b2fd922f4b4edc26c",
".git/objects/38/ef24dee5e51ea5ddd5a135bd6f9f9dad76c3f2": "16043e9b4bc05091d14064fd565305f8",
".git/objects/38/ecfe95bcf96a907cf79323fdaee85f5268bcf2": "2d9301ebd66a5ef8d1d1e365365b73c7",
".git/objects/6e/93c46a7751142a0684ea12458da1bb585eb2ab": "c3052092d30eb6a83dd8fc6d089e4c96",
".git/objects/6e/66b817b13428d39ef79bbd4ebdcada9e600887": "02cfee5e3b3776298d660d2c8eea017a",
".git/objects/6e/0bf741df146c6b97ed140e0129195c29449bfa": "3c3da64118131db2c82851900d180ff7",
".git/objects/9a/de25e6813af3502fdfa0547e93dfcbf303bb44": "c6801d1970377f07899088284479a6ce",
".git/objects/9a/18878e2e691ff041fd1ee3988a671948db4285": "fd2fc97034b470dfe72868f44685e595",
".git/objects/36/8b2c44742c205f9633cea6999036f1714c69e2": "f140888a0611f4f4e248ebbda4efd34a",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/09/cb49c3f8cf226510fbef0945b724ca3ae3b9da": "ddc75142153581b768a3a8f97e7fc3eb",
".git/objects/31/613755c7bfada87ebc43339e7a489875d091bc": "93175ed08a1f2a48b1fd219b6632636b",
".git/objects/65/e683a0c753c8ed6f9e5039804cef0963b6f0b3": "18eab638a3fc38eea9bd34c583ead2b1",
".git/objects/96/381070aabbdc4f3f8383a6980296702ea5700e": "b5748274dac3a921ffa1b9f0de1d622b",
".git/objects/3a/d55c3880d95b7e670eb2aad12ac6c2c0c6de6c": "108db7a74c131ed5c94d0c8d26a75e20",
".git/objects/30/2f8234a2b6a9f6cdf87e088f9b5f643398f6db": "77042e2d7c1832492eb5aa0ba473efec",
".git/objects/30/9cdd5d9305a199279c3a58f7025c36ed4da906": "70d005274030090a82999f3893e0e187",
".git/objects/5e/6a99f5d59f7e971d1a42f1341a3166d5a664af": "e356ef8c6604b5394aaa28c2c4a1da87",
".git/objects/37/acf25220b53e1a39fa0a251a0fa1c088fac65f": "8935087eec9c1bcb83b629022b9e9ea7",
".git/objects/37/4c8c865081f38ef5dd655856d8adc476fb6f7f": "2b722fbfcf2d1506d1a37c143f72ca69",
".git/objects/6d/31c425cec2027f205307dbaabe3ea667a10c0d": "cb151b824fd182ca5bc6a2bd4609da24",
".git/objects/01/ce194ed6f12d7865c3feda79cfa615cd235276": "43b3c59cdb0cf4e89240f63ebee8ccc5",
".git/objects/06/2dd0976a3992fbb457b5895f0878b531c76f18": "e16d2727e99d3e013699a380a8df2389",
".git/objects/39/aa98023e591f761efc1dc6b7e1be727b3ca97b": "b4aac4b2dc47260fb8d45b8f29f91d77",
".git/objects/39/ff2b29b05e74ac035f60b6c1fa5f826079bf36": "6473dec17f8ef9e04bc5484fb62cb9b1",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/55/19f209cd237b2279675ec37e0c74a30883bc43": "ff3264811d8533180305169e9220d3f3",
".git/objects/55/c75514a1d6c93ee3b1a7024cde507a7c53ed01": "40aaee06cbb5063049c6f297af00dada",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/bf/c38a4ff4a63fe9f06aa2a0bd54516ef360d263": "c6d1804e39dfabf40b60680787a1a35f",
".git/objects/bf/32b055a588f85ac25e937b954215b6469e0927": "a1ecf05abe9fb21c867134c1ef51847b",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/0b783b182448d85780d7232a3905517de21055": "02fec00a4bb6ac553f784e93c6d54c29",
".git/objects/a0/5066e57b73ad840a0adcec504544b6b2a7a7ca": "69f1ac7ec2452a50a39c259aa023e53e",
".git/objects/b8/993633c80714c6984de68b476cd22401cb12de": "15f269e0ae9238fe22f7df8116c4bf44",
".git/objects/b8/1e18b7e6c6bb9f0d8dc125f04080214a37954c": "595dcc5cc9b01eb07d58ae2affd98b9e",
".git/objects/dc/3c0dc361517a214c67410d73a17d0a1c293d10": "825ef6a4f522f3d070de18e549a68bc4",
".git/objects/b6/cb074086cb5951c1fca0d66562896d9d427099": "f5d72101ae45e70178cd7c1baeb81ee2",
".git/objects/b6/373f1367a881428d4fab4f34223a5647942c4e": "5e97b72b58a77f590b947cc2c7abe427",
".git/objects/b6/6942858b3a30789ff86206d61b01cb919a3d91": "3821671bb76d8fc179eaa2e39fc84f3f",
".git/objects/a9/75cf88b4357f8be76c791eff2db66a8150a848": "935513538e052f159814b3f3e31b1eda",
".git/objects/d5/d57a7226800ecaeb4f84b4e79c3768a93946b8": "d310887a1063f18c292f4ece572daa06",
".git/objects/d2/40ba98b15aa2795d00942411a52f15e4e98a6c": "5b9c3beaea9463dc1d0cdb9a09f0a2ce",
".git/objects/af/2777083e1fd69e560825d9aeb3d826434c311b": "1bb8a940e861f598b5e4d4f0ec1646ae",
".git/objects/af/6f5e1b9c8e120079e9ac68a1905fe13ea1c8d9": "8189d609225c63494282ee611c57b39f",
".git/objects/b7/f953a777a4e2b677b766240b534d6c3f091919": "64d34132a64dcf9fad654a452a6f5d13",
".git/objects/db/cacd5e18f30ae712c9b32c5026bba1b6721358": "297626f7f8c8e0a1fcb6f9433d85f67e",
".git/objects/b0/9035bcdb46957d5452c452c5a7a118af9773f2": "7b88118e68d108206ac69102cdc384b9",
".git/objects/a6/fb197e2a29e11cdc2cf0caf3a37c783239b456": "1dad34e212d7730efa3ca49eee4b2aa5",
".git/objects/b9/d874e32415864dd1b9aee9a9acc69bce8a5569": "cc0e20c8da913c0e323faa6b811bc4bd",
".git/objects/a1/74aa427466432ea13f5b61063361f52e7937cd": "30c4ac3c2c8ac76ad7a9d44861dfc7bd",
".git/objects/c3/9ccc96bc70ef3f4f70664062772ab860eb9885": "44551389baf4e6188dbd77f504eafe79",
".git/objects/c3/1cb58eb3e1064569211128fdcd5aa7bab1957f": "bcc4a0337a35849decd49675f06fb81b",
".git/objects/c3/9ad5e81d42c32599866bbe56ab684e6ad17a24": "bcafe485b4faec3cbae8f702abbbd140",
".git/objects/c4/55799d2d39f704b65c7eeb7fb7bb29139babaf": "6cb48c4c0476263571e6ca9ab50832df",
".git/objects/ea/4786181d3902a95a0f4b3a3efbe9ff3ed21673": "7791ed2bc7d58db25fa9eec8b6feb943",
".git/objects/ea/8c448246f165c0c06a9a37c14f96b65ab5cf2a": "7b4d23f1b9b9af6318509527c5daae4f",
".git/objects/cd/5a844286c56b67b2267bb85423111e2f591781": "2e3f0c647a1e0e8ad4933ef09c675919",
".git/objects/cc/e4e68f9e65fe754c2d268072ae8a338f8626b7": "7daf78ccd36d98426991186bb44e190f",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/88956801e97f6b707abdb54388a852a6c54d99": "9c1b310cf55596e38c4567c1a384f5ae",
".git/objects/f0/ae1fb70ad66597e86f65a3b699e8c69891464d": "441a88ebb9c668825792a87e23a45717",
".git/objects/e8/ecb2397650ded8b71805a8b224c3fa3e2c5640": "7c2d018c9bddc4be904dccb4a3148b21",
".git/objects/c5/2925768823157f6b22fa7d4a463eb9681e5131": "29bcb44c9dc9ae730d97933788ed2f10",
".git/objects/c2/2b5fa4ac31dcae036155f024619fd7a967409a": "a5ac07044fe1ec2c885c0bd1c9b9d2f2",
".git/objects/c2/8d1258d7608de98846059c024fa98efb8aa6bb": "e01af32f86eae0da431a06c2ecfc52ea",
".git/objects/f6/8abef2d112d2c71dbeed61256ab36881837f9d": "fe5716246d029f5df3f93839eca87d58",
".git/objects/e9/33d75719c152c14573e1df49691a4f9437bdb3": "126f0f4faf00327eec6143f65596fb4d",
".git/objects/f1/63b6d2213f8d881967086b17242c3204c4a133": "cf18a3e1f23f9544c6839f1d575859f4",
".git/objects/f1/6d9dfc675806e95b18c55983c2b80b9f88f80f": "dbfbfe467ee76c4b3378acf1f0744c43",
".git/objects/e7/24d1315fed344632eeb8266948d2d123dc32f1": "2ccf694cb64c4179f02bc3cd06cc18f8",
".git/objects/e7/2bbc9d695b6e661a9bd9ba4e006c00ea97a4d0": "bcace6870f7c13d063984b91dcfc3fa8",
".git/objects/f8/dee1af0f70f950c8caec767af4f7c1541ae387": "67f3ac6bfd70fe3c180ad8c939eb123f",
".git/objects/41/42af467bf2055c6f6eeb143b458f81a957216d": "bef95af48bfb036cb2e63cad4d6501ba",
".git/objects/41/40bace96a6ae1ca8aa16529c85657e57f6c081": "c4da2094d75ed240ec5e276577a90b57",
".git/objects/1b/b751bea1d0ba5e1bf97173a2ac5b37a563396f": "8290e7b1425376b3fb961a53241955ec",
".git/objects/1b/1cd1f2fda8793b59f992589f55c6317ce02c6e": "6afbdaf1768324fb51fe37adeec03077",
".git/objects/77/9d2708ef18033fde9a9c9cf9c0034e2ab7f339": "c0123e15e64cb47d551dbb9936978e8b",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/70/3fa1a5ff677ffed7ed15185fb2204bbab72dba": "3fe428d8e96708940ebb4d22598c4c52",
".git/objects/70/2cf935a083a987ef050e69a09c876c438562e0": "9b99056f4d6c3c85ce3d5c66ae960ed7",
".git/objects/1e/e280038a968e639f5f5be4ce68ea5b729158d0": "2fc77a9b46c07ffd7efb4dab4aa8a095",
".git/objects/84/f37e475fbb5b7832984d52ddf50019a2213f78": "3c9d1605d05f4ed9dccfdcb2b7e8be99",
".git/objects/24/e6106a27111f55d4a36d2ac752c0c18e295874": "96bd29ea6dda126c6ac47fd725c831ed",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/e64fdbd63950fac2662f627d05dba23de06430": "d315b7fa5f43aa5f597970d023f70a6d",
".git/objects/8d/54636ddf3529d3b6bfe9388f16d6dcfac7185a": "471d30b789bc9b0edfdd3563827cb815",
".git/objects/15/451c2ae164964e008e76af3e64f63d573ec9d7": "2f5b220c0f0842d3247e0e9256ff60c5",
".git/objects/12/e640265eb1e7cf1f86648ef75774065ec1c019": "73ea1d9c738a0900bff0af689e130944",
".git/objects/12/403b21584c8d1c7bee3c4f063db51d923fbf6c": "4b173101ab3a2279a9c729e86294b524",
".git/objects/71/0f02e9a4069405901a4e78614f184847b6192e": "738ff7bf69ef502606d4936eba400ff2",
".git/objects/71/7d5486ecf6af57bef3a570ac89c94e086d047f": "db7d6beb446491469ffa044bbd6dcb36",
".git/objects/82/fc323c172867c9f97f41f6e979427200cd6b4b": "9e52c5e24f18ace1ddfd971c7734630c",
".git/objects/82/7720dc4a36a376ee486c7111ef7d5a8769f772": "9d156bf2822c2338e8ca17afd11cfe6c",
".git/objects/82/1a2fc160d641f1fcfed9f9287dc35b340ebd98": "4806a3b7d05329a7c904572c60739492",
".git/objects/49/392362783e6ee108eff6291f169cf4f370b34a": "20cbe71bd23382f32f3a76b198c1f7b8",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/7f/30756257b2c0dcf633e935f2a35c3a3d8eb101": "e37de1b9ee89d51defd1b65279e110b7",
".git/objects/7f/cba79aeec25f79d2ee456e47a55004939edbd3": "3bc1189f4ca3dbf2ec41004fb7f6d164",
".git/objects/8e/ea2f241f41ac3282b63b336c403cdeec9a1701": "c416d258a3db20a0a2367ef4bb3dc5ee",
".git/objects/25/8d961107df04ad388e2121340d2d6046a9b340": "d58e94ddf14a29b2b4ba391fa7af670b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8c20a32592fde68c793e3a35a38cc62",
".git/logs/refs/heads/main": "b8c20a32592fde68c793e3a35a38cc62",
".git/logs/refs/remotes/origin/main": "6f8ba8ac2a8c91d85830bc14157b696a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
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
".git/refs/heads/main": "86b6c1057f880c1141817cb46852a67b",
".git/refs/remotes/origin/main": "86b6c1057f880c1141817cb46852a67b",
".git/index": "93abd3b8a4869319fdce11f24b51cef9",
".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
"assets/AssetManifest.json": "2a39c611300d617f170549f41534c096",
"assets/NOTICES": "d18dae890240ae73c02673de1750446b",
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
"assets/assets/icons/by%2520details.svg": "19d2e54163641aaa4b8ad2c6e7d0c3c7",
"assets/assets/icons/cancel.svg": "b67616b89eb633724948d1049f49542f",
"assets/assets/icons/ic_plus.svg": "8d8f03181c5f03b00ce26eb74abd8b81",
"assets/assets/icons/qr%2520pay.svg": "0fd36ee2a20e5528d165dd9e1e165626",
"assets/assets/icons/credit_card.svg": "f4035d3803dcd3e8ee30386799b2ff98",
"assets/assets/icons/services.svg": "6cce486434c6134f65456ea252810b94",
"assets/assets/icons/ic_minus.svg": "b76fbe35a7ef6db9e31aad116007fc12",
"assets/assets/icons/service.svg": "a4c7cd57e815b8bdf72f6794e44fdf69",
"assets/assets/icons/between%2520accounts.svg": "648973631f3c1c5146c023662769d935",
"assets/assets/icons/purchase.svg": "11d72e763eb37488335e10f6bb439a91",
"assets/assets/icons/service_colored.svg": "97a307d224902fa46271982515069da5",
"assets/assets/icons/add_icon_green.svg": "0d0861ac564721b0255552e25e1a324a",
"assets/assets/icons/withdraw%2520cash.svg": "373277314de8e82da87d6678f9322e16",
"assets/assets/icons/settings.svg": "44ac8ce292b2a760773b3b4c651f2e90",
"assets/assets/icons/arrow%2520up.svg": "ad50b7929632415a2707c0a6394acded",
"assets/assets/icons/transfer%2520to%2520card.svg": "0a787a8e27aed41bb6980a4f57b74115",
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
"assets/assets/icons/debit_card.svg": "c56cadeef5b63b162496a642961c52c5",
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
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
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
