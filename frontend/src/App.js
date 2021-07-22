import { Container, ThemeProvider } from "@material-ui/core";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import theme from "./theme";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Container className="container">
          <ChatPage />
        </Container>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
