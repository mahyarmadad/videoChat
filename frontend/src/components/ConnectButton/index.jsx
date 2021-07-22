import { Button } from "@material-ui/core";
import { IoMdVideocam } from "react-icons/io";
import { IoChatbubbleSharp } from "react-icons/io5";
import "./connectButton.css";

export default function ConnectButton() {
  return (
    <div className="flex-center justify-center medium-gap medium-margin-top">
      <Button
        variant="contained"
        color="inherit"
        className="primary-button"
        startIcon={<IoChatbubbleSharp />}
      >
        Chat
      </Button>
      <Button
        variant="contained"
        color="inherit"
        className="secondary-button"
        startIcon={<IoMdVideocam />}
      >
        Video Call
      </Button>
    </div>
  );
}
