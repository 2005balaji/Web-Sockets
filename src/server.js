const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*'
  }
});

// emit the data to the connected client
io.on('connection', (socket) => {
  console.log('A client connected');
  const data = {
   Application_Name: "UptodownAppStore",
    MinSDK_Version: "7",
    version_Name: "4.80",
    version_Code: "480",
    Package_Name: "com.uptodown",
    TargetSdk_Version: "33",
    Support_Screensizes: "'small''normal''large''xlarge'",
    Supported_ScreenDensities: "'160''240''320''480''640''65534''65535'",
    Feature_s: "uses-feature-not-required:name='android.hardware.camera','uses-feature-not-required:name=','android.hardware.faketouch','uses-feature-not-required:name=','android.hardware.location.gps','uses-feature-not-required:name=','android.hardware.microphone','uses-feature-not-required:name=','android.hardware.sensor','uses-feature-not-required:name=','android.hardware.touchscreen','uses-feature-not-required:name=','android.hardware.wifi','uses-feature-not-required:name=','android.software.leanback','provides-component:','search','main',",
    Permission_s: "package: com.uptodown\nuses-permission: name='android.permission.INTERNET'\nuses-permission: name='android.permission.ACCESS_NETWORK_STATE'\nuses-permission: name='android.permission.WRITE_EXTERNAL_STORAGE'\nuses-permission: name='android.permission.GET_ACCOUNTS'\nuses-permission: name='android.permission.WAKE_LOCK'\nuses-permission: name='android.permission.GET_PACKAGE_SIZE'\nuses-permission: name='android.permission.RECEIVE_BOOT_COMPLETED'\nuses-permission: name='android.permission.USE_CREDENTIALS'\nuses-permission: name='android.permission.AUTHENTICATE_ACCOUNTS'\nuses-permission: name='android.permission.MANAGE_ACCOUNTS'\nuses-permission: name='android.permission.ACCESS_WIFI_STATE'\nuses-permission: name='android.permission.REQUEST_INSTALL_PACKAGES'\nuses-permission: name='android.permission.REQUEST_DELETE_PACKAGES'\nuses-permission: name='android.permission.MANAGE_EXTERNAL_STORAGE'\nuses-permission: name='android.permission.QUERY_ALL_PACKAGES'\nuses-permission: name='android.permission.UPDATE_PACKAGES_WITHOUT_USER_ACTION'\nuses-permission: name='android.permission.POST_NOTIFICATIONS'\nuses-permission: name='android.permission.INSTALL_PACKAGES'\nuses-permission: name='android.permission.DELETE_PACKAGES'\nuses-permission: name='android.permission.ACCESS_SUPERUSER'\nuses-permission: name='android.permission.RECORD_AUDIO'\nuses-permission: name='com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE'\nuses-permission: name='android.permission.FOREGROUND_SERVICE'\npermission: com.uptodown.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION\nuses-permission: name='com.uptodown.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION'\n",
    Language_s: "'--_--''af''am''ar''as''az''be''bg''bn''bs''ca''cs''cs-CZ''da''da-DK''de''el''en-AU''en-CA''en-GB''en-IN''en-XC''es''es-419''es-US''et''eu''fa''fi''fi-FI''fr''fr-CA''fr-FR''gl''gu''hi''hi-IN''hr''hu''hu-HU''hy''in''in-ID''is''it''it-IT''iw''iw-IL''ja''ja-JP''ka''kk''km''kn''ko''ko-KR''ky''lo''lt''lv''mk''ml''mn''mr''ms''my''nb''ne''nl''nl-NL''no-NO''or''pa''pl''pl-PL''pt''pt-BR''pt-PT''ro''ru''ru-RU''si''sk''sl''sq''sr''sr-Latn''sv''sv-SE''sw''ta''te''th''tl''tr''tr-TR''uk''ur''uz''vi''zh-CN''zh-HK''zh-TW''zu'",
    Signature_s: "Signer #1:\n\nCertificate #1:\nOwner: CN=Luis Hernandez, OU=Media Ingea sl, O=Media Ingea sl, L=Malaga, ST=Malaga, C=ES\nIssuer: CN=Luis Hernandez, OU=Media Ingea sl, O=Media Ingea sl, L=Malaga, ST=Malaga, C=ES\nSerial number: 4ee8a49e\nValid from: Wed Dec 14 18:59:02 IST 2011 until: Sun Dec 07 18:59:02 IST 2036\nCertificate fingerprints:\n\t SHA1: 9A:A9:BA:0A:E1:D5:6B:0F:C3:DF:26:FD:F8:F3:CF:35:58:9F:56:A5\n\t SHA256: 1E:F7:D6:8F:1F:8D:3A:B5:5D:AB:F0:A9:A3:81:10:A5:A0:FD:24:03:82:63:BF:C8:04:81:4E:9B:DD:80:7F:4B\nSignature algorithm name: SHA1withRSA (weak)\nSubject Public Key Algorithm: 1024-bit RSA key (weak)\nVersion: 3\n\n",
    __v: 0
    }
  socket.emit('data', data);
});

httpServer.listen(4000, () => {
  console.log('WEBSOCKET listening on port 4000');
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const app = require('express')();
// const httpServer = require('http').createServer(app);
// const io = require('socket.io')(httpServer);
// const cors = require('cors');

// app.use(cors());


// // enable CORS
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// // emit the data to the connected client
// io.on('connection', (socket) => {
//   console.log('A client connected');
//   const data = {
//     version_Name: "4.80",
//     version_Code: "480",
//     Package_Name: "com.uptodown",
//     TargetSdk_Version: "33",
//     Support_Screensizes: "'small''normal''large''xlarge'",
//     Supported_ScreenDensities: "'160''240''320''480''640''65534''65535'",
//   }
//   socket.emit('data', data);
// });

// httpServer.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

