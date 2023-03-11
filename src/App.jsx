

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const socket = io('http://localhost:4000', {
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
      <p>Application Name: {data.Application_Name}</p>
      <p> Min SDK Version: {data.MinSDK_Version}</p>
      <p>Version Name: {data.version_Name}</p>
      <p>Version Code: {data.version_Code}</p>
      <p>Package Name: {data.Package_Name}</p>
      <p>Target SDK Version: {data.TargetSdk_Version}</p>
      <p>Supported Screen Sizes: {data.Support_Screensizes}</p>
      <p>Supported Screen Densities: {data.Supported_ScreenDensities}</p>
      <p>Features: {data.Feature_s}</p>
      <p>Permissions: {data.Permission_s}</p>
      <p>Languages: {data.Language_s}</p>
      <p>Signatures: {data.Signature_s}</p>
    </div>
  );
};

export default App;
