import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
//import socketIOClient from "socket.io-client";
import ClientComponent from "./ClientComponent";

//const ENDPOINT = "http://localhost:4001";

function App() {
  const [loadClient, setLoadClient] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>
        {/* LOAD OR UNLOAD THE CLIENT */}
        <button onClick={() => setLoadClient(prevState => !prevState)}>
          STOP CLIENT
        </button>
        {/* SOCKET IO CLIENT*/}
        {loadClient ? <ClientComponent /> : null}
        </>
      </header>
    </div>
  );
}

export default App;
