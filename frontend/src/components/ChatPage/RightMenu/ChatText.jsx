import { Typography } from "@material-ui/core";
import "./ChatText.css";

export default function ChatText({ user, text }) {
  const date = new Date();
  return text ? (
    <div className={`chat-div ${user ? "user-chat" : "friend-chat"}`}>
      <Typography className="chat-text">{text}</Typography>
      <small className="chat-time">{date.toLocaleTimeString()}</small>
    </div>
  ) : null;
}
