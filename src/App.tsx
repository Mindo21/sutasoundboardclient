import React, {useEffect, useState} from 'react';
import { socket } from './socket';
import './App.css';
import Soundboard from "./components/Soundboard/Soundboard";

function App() {

    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        socket.connect()

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, []);

  return (
    <div className="App">
      <h1 className="soundboardTitle">Suta Soundboard</h1>
      <Soundboard />
        <h2 className="soundboardTitle">{`${isConnected ? "connected" : "disconnected"}`}</h2>
    </div>
  );
}

export default App;
