import { Button, Dialog, Slide, Typography } from "@material-ui/core";
import { forwardRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./callDialog.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InComingCallDialog({ open, setOpen, typeCall }) {
  const type = typeCall?.includes("chat") ? "Chat" : "Video";
  return (
    <Dialog open={open} fullWidth TransitionComponent={Transition} keepMounted>
      <div className="dialog-container">
        <Typography className="dialog-title">Incoming {type} Call</Typography>
        <FaUserCircle size={100} className="caller-icon" />
        <div className="button-div">
          <Button fullWidth variant="contained" className="accept-button">
            Accept
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => setOpen(false)}
            className="reject-button"
          >
            Reject
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
