import { Grid } from "@material-ui/core";
import { toast } from "material-react-toastify";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isCallingUser } from "../../../recoil/state";
import CallButtons from "./CallButtons";
import InComingCallDialog from "./InComingCallDialog";
import InfoCallDialog from "./InfoCallDialog";
import "./mainPage.css";
import RecordButtons from "./RecordButtons";
import poster from "./screenShot.png";
import VideoButtons from "./VideoButtons";

export default function MainPage({ socket }) {
  const [isCalling, setIsCalling] = useState(false);
  const [inComingCall, setInComingCall] = useState(false);
  const [callerId, setCallerId] = useState("");
  const [callInfo, setCallInfo] = useState(false);
  const [callInfoTitle, setCallInfoTitle] = useState("");
  const [callInfoText, setCallInfoText] = useState("");
  const [typeCall, setTypeCall] = useState("");
  const setIsCallingRecoil = useSetRecoilState(isCallingUser);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((data) => console.log(`media data`, data))
      .catch((e) => toast.error(e.message));
  }, []);

  useEffect(() => {
    socket?.on("pre-offer", (data) => {
      console.log(`pre-offer CAME`, data);
      const { callerId, type } = data;
      setTypeCall(type);
      setCallerId(callerId);
      setInComingCall(true);
    });
  }, [socket]);

  useEffect(() => {
    socket?.on("pre-offer-answer", (data) => {
      console.log(`pre-offer-answer CAME`, data);
      switch (data.answer) {
        case "Call_Accept":
          setIsCallingRecoil(false);
          return setInComingCall(false);

        case "Call_Reject":
          setIsCallingRecoil(false);
          setCallInfoTitle("Call Rejected");
          setCallInfoText(
            "Your call got rejecred by user , Please try again later"
          );
          return setCallInfo(true);

        case "Call_Not_Found":
          setIsCallingRecoil(false);
          setCallInfoTitle("Call No Found");
          setCallInfoText("Please check the code and try again");
          return setCallInfo(true);

        case "Call_Unavailable":
          setIsCallingRecoil(false);
          setCallInfoTitle("Call No Available");
          setCallInfoText("Probably user is busy, Please try again later ");
          return setCallInfo(true);

        default:
          return null;
      }
    });
  }, [setIsCallingRecoil, socket]);

  return (
    <Grid item xs={6} className="gridMain">
      <div className="video-container">
        <video
          id="remote-video"
          className="remote-video"
          autoPlay
          poster={poster}
        />
        <div className="local-video-container">
          <video
            id="local-video"
            className="local-video"
            muted
            autoPlay
            poster={poster}
          />
        </div>
        <VideoButtons />
        {isCalling && <CallButtons />}
        <RecordButtons />
        <InComingCallDialog
          open={inComingCall}
          setOpen={setInComingCall}
          typeCall={typeCall}
          socket={socket}
          callerId={callerId}
        />
        <InfoCallDialog
          open={callInfo}
          setOpen={setCallInfo}
          title={callInfoTitle}
          text={callInfoText}
        />
      </div>
    </Grid>
  );
}
