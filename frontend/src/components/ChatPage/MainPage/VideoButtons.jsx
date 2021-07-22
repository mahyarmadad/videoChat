import { IconButton } from "@material-ui/core";
import { AiFillCamera } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { ImPhoneHangUp } from "react-icons/im";
import { IoCameraReverse } from "react-icons/io5";
import { TiMediaRecord } from "react-icons/ti";

export default function VideoButtons() {
  return (
    <div className="video-buttons-container">
      <IconButton className="mic-button">
        <BsFillMicFill />
      </IconButton>
      <IconButton className="camera-button">
        <AiFillCamera />
      </IconButton>
      <IconButton className="phone-button">
        <ImPhoneHangUp />
      </IconButton>
      <IconButton className="camera-button">
        <IoCameraReverse />
      </IconButton>
      <IconButton className="camera-button">
        <TiMediaRecord color="#e53935" />
      </IconButton>
    </div>
  );
}
