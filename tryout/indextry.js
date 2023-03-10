import React, { useEffect, useState } from 'react';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to server');
    };

    ws.onmessage = (event) => {
      // console.log('Received message:', event.data);
      setMessage(event.data);
    };

    return () => {
      ws.close();
    };
  }, []);

  


  return (
    <div className="App">
      <h1>WebSocket Example</h1>
      {/* <p>{message}</p> */}
      {
        // console.log(message)
      }


    </div>
  );
}

export default App;