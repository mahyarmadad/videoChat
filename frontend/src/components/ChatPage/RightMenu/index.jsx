import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { BiSend } from "react-icons/bi";
import ChatText from "./ChatText";
import "./RightMenu.css";

export default function RightMenu() {
  return (
    <Grid item xs className="gridRight">
      <div className="chat-container">
        <div className="chat-messages-div">
          <ChatText />
          <ChatText user />
          <ChatText />
          <ChatText user />
          <ChatText />
        </div>
        <TextField
          placeholder="Type your message...."
          fullWidth
          multiline
          maxRows={2}
          variant="outlined"
          InputProps={{
            className: "chat-text-field",
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => {}}>
                  <BiSend color="#039be5" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </Grid>
  );
}
