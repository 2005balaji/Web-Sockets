// import React, { useEffect, useState } from 'react';


// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const ws = new WebSocket('ws://localhost:8080');

//     ws.onopen = () => {
//       console.log('Connected to server');
//     };

//     ws.onmessage = (event) => {
//       // console.log('Received message:', event.data);
//       setMessage(event.data);
//     };

//     return () => {
//       ws.close();
//     };
//   }, []);

  

//   //   const jsonString = message
//   // const jsonObject = JSON.parse(jsonString);
//   // const applicationName = jsonObject.Application_Name;
//   // console.log(applicationName);

//   return (
//     <div className="App">
//       <h1>WebSocket Example</h1>
//       {/* <p>{message}</p> */}
//       {
//         // console.log(message)
//       }


//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const socket = io('http://localhost:3000', {
      transports: ['websocket', 'polling', 'flashsocket']
    });

    socket.on('connect', () => {
      console.log('Connected to socket');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket');
    });

    socket.on('data', (data) => {
      console.log('Received data:', data);
      setData(data);
    });
  }, []);

  return (
    <div>
      <p>Version Name: {data.version_Name}</p>
      <p>Version Code: {data.version_Code}</p>
      <p>Package Name: {data.Package_Name}</p>
      <p>Target SDK Version: {data.TargetSdk_Version}</p>
      <p>Supported Screen Sizes: {data.Support_Screensizes}</p>
      <p>Supported Screen Densities: {data.Supported_ScreenDensities}</p>
    </div>
  );
};

export default App;
