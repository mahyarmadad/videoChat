import { IconButton, Typography } from "@material-ui/core";
import { BsPause, BsPlay } from "react-icons/bs";
export default function RecordButtons() {
  return (
    <div className="record-buttons-container">
      <IconButton>
        <BsPause />
      </IconButton>
      <IconButton>
        <BsPlay />
      </IconButton>
      <Typography variant="caption" color="textSecondary">
        Stop Recording
      </Typography>
    </div>
  );
}
