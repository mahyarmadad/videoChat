import { Grid } from "@material-ui/core";
import LeftMenu from "./../../components/ChatPage/LeftMenu";
import MainPage from "./../../components/ChatPage/MainPage";
import "./chatpage.css";
export default function ChatPage() {
  return (
    <Grid container className="gridDiv">
      <LeftMenu />
      <MainPage />
      <Grid item xs className="gridRight">
        <h1>Right</h1>
      </Grid>
    </Grid>
  );
}
