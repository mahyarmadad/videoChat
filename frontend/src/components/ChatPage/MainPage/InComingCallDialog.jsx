import { Button, Dialog, Slide, Typography } from "@material-ui/core";
import { forwardRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./callDialog.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InComingCallDialog({
  open,
  setOpen,
  typeCall,
  socket,
  callerId,
}) {
  const type = typeCall?.includes("chat") ? "Chat" : "Video";

  const onButtonClick = (answer) => (e) => {
    socket.emit("pre-offer-answer", {
      callerID: callerId,
      answer,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} fullWidth TransitionComponent={Transition} keepMounted>
      <div className="dialog-container">
        <Typography className="dialog-title">Incoming {type} Call</Typography>
        <FaUserCircle size={100} className="caller-icon" />
        <div className="button-div">
          <Button
            fullWidth
            variant="contained"
            className="accept-button"
            onClick={onButtonClick("Call_Accept")}
          >
            Accept
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={onButtonClick("Call_Reject")}
            className="reject-button"
          >
            Reject
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
