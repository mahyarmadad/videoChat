import { Container, ThemeProvider } from "@material-ui/core";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import theme from "./theme";

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
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Container className="container">
        <ChatPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
