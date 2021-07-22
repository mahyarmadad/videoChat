import { Button, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import { IoMdVideocam } from "react-icons/io";
import { IoChatbubbleSharp } from "react-icons/io5";

export default function ConnectButton({
  disabled,
  onChatClick = () => {},
  onVideoClick = () => {},
}) {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex-center justify-center medium-gap medium-margin-top">
      <Button
        variant="contained"
        color="inherit"
        onClick={() => {
          setLoading("Chat");
          onChatClick();
          setLoading(false);
        }}
        disabled={disabled || loading}
        className="primary-button"
        startIcon={<IoChatbubbleSharp />}
      >
        {loading === "Chat" ? <CircularProgress size={20} /> : "Chat"}
      </Button>
      <Button
        variant="contained"
        color="inherit"
        onClick={() => {
          setLoading("Video");
          onVideoClick();
          setLoading(false);
        }}
        disabled={disabled || loading}
        className="secondary-button"
        startIcon={<IoMdVideocam />}
      >
        {loading === "Video" ? <CircularProgress size={20} /> : "Video Call"}
      </Button>
    </div>
  );
}
