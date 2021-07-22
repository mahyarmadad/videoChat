import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { toast } from "material-react-toastify";
import { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { GiVideoConference } from "react-icons/gi";
import ConnectButton from "./ConnectButton";
import "./leftMenu.css";
export default function LeftMenu({ socketID, navigator }) {
  const [myCode, setMycode] = useState("");
  const [friendCode, setFriendCode] = useState("");
  const [allowStrange, setAllowStrange] = useState(false);

  useEffect(() => {
    if (socketID) {
      console.log(`socketID`, socketID);
      setMycode(socketID.id);
    }
  }, [socketID]);

  return (
    <Grid item xs className="gridLeft">
      <div className="flex-center medium-gap">
        <GiVideoConference size={70} color="white" />
        <Typography variant="h5" color="textPrimary">
          Meet People
        </Typography>
      </div>

      <Typography
        variant="body1"
        color="textPrimary"
        className="left-input-title"
      >
        Talk to the people around the world , friends or strangers by passing
        their id or find random one
      </Typography>
      <TextField
        label="Your Personal Code"
        fullWidth
        value={myCode ? myCode : ""}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  navigator?.clipboard.writeText(myCode);
                  toast.info(`${myCode} copy to clipboard`);
                }}
              >
                <FiCopy />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <div className="friend-connect-group">
        <TextField
          label="Personal Code"
          fullWidth
          variant="outlined"
          value={friendCode}
          onChange={(e) => setFriendCode(e.target.value)}
        />
        <ConnectButton
          disabled={!friendCode}
          onChatClick={() => console.log(`CHAT CLCIK`)}
          onVideoClick={() => console.log(`Video CLCIK`)}
        />
      </div>

      <div className="strange-connect-group">
        <Typography variant="body1" color="textPrimary">
          Stranger
        </Typography>
        <ConnectButton
          onChatClick={() => console.log(`CHAT CLCIK`)}
          onVideoClick={() => console.log(`Video CLCIK`)}
        />
      </div>

      <FormControlLabel
        control={
          <Checkbox
            checked={allowStrange}
            color="primary"
            onChange={(e) => setAllowStrange(e.target.checked)}
            name="allowStrange"
          />
        }
        label={
          <Typography variant="caption" color="textSecondary">
            Allow connection from stranger
          </Typography>
        }
      />
    </Grid>
  );
}