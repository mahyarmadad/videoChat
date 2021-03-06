import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import RightMenu from "../../components/ChatPage/RightMenu";
import LeftMenu from "./../../components/ChatPage/LeftMenu";
import MainPage from "./../../components/ChatPage/MainPage";
import "./chatpage.css";

const ENDPOINT = "http://localhost:5000";

export default function ChatPage() {
  const [socketConnection, setSocketConnection] = useState(null);

  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("connect", () => {
      setSocketConnection(socket);
    });
    return () => {
      socket.disconnect();
      setSocketConnection(null);
    };
  }, []);

  return (
    <Grid container className="gridDiv">
      <LeftMenu socket={socketConnection} />
      <MainPage socket={socketConnection} />
      <RightMenu />
    </Grid>
  );
}
