const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    let data = {
        "Application_Name": "UptodownAppStore", "version_Name": "4.80",
        "version_Code": "480",
        "Package_Name": "com.uptodown",
        "TargetSdk_Version": "33",
        "Support_Screensizes": "'small''normal''large''xlarge'",
        "Supported_ScreenDensities": "'160''240''320''480''640''65534''65535'",
        "MinSDK_Version": "7"
    }

    const jsonString = JSON.stringify(data);


    ws.send(jsonString)

    ws.on('message', (message) => {
        console.log('Received message:', message);

        // Send a response to the client
        ws.send('This is a response from the server');
    });
});
