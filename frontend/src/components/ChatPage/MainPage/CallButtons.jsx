import { IconButton } from "@material-ui/core";
import { ImPhoneHangUp } from "react-icons/im";

export default function CallButtons() {
  return (
    <div className="video-buttons-container">
      <IconButton className="phone-button">
        <ImPhoneHangUp />
      </IconButton>
    </div>
  );
}
