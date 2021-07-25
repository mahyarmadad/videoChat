import { Button, Dialog, Slide, Typography } from "@material-ui/core";
import { forwardRef } from "react";
import { FaUserCircle } from "react-icons/fa";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function IsCallingDialog({ open, setOpen }) {
  return (
    <Dialog open={open} fullWidth TransitionComponent={Transition} keepMounted>
      <div className="dialog-container">
        <Typography className="dialog-title">Calling....</Typography>
        <FaUserCircle size={100} className="caller-icon" />
        <div className="button-div">
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => setOpen(false)}
            className="reject-button"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
