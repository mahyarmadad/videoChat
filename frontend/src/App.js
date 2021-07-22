import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";
const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);

function App() {
  useEffect(() => {
    socket.on("connection", () => {
      console.log(`so CONECT`);
    });
    return () => socket.disconnect();
  }, []);
  return (
    <div className="App">
      <h1>HEloo</h1>
    </div>
  );
}

export default App;
