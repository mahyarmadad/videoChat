import { Button, Dialog, Slide, Typography } from "@material-ui/core";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InfoCallDialog({ open, setOpen, title, text }) {
  return (
    <Dialog open={open} fullWidth TransitionComponent={Transition} keepMounted>
      <div className="dialog-container">
        <Typography className="dialog-title">{title}</Typography>
        <Typography className="dialog-title" style={{ marginBottom: 16 }}>
          {text}
        </Typography>
        <div className="button-div">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => setOpen(false)}
          >
            ok
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
