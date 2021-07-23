import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import CallButtons from "./CallButtons";
import InComingCallDialog from "./InComingCallDialog";
import "./mainPage.css";
import RecordButtons from "./RecordButtons";
import poster from "./screenShot.png";
import VideoButtons from "./VideoButtons";

export default function MainPage({ socket }) {
  const [isCalling, setIsCalling] = useState(false);
  const [inComingCall, setInComingCall] = useState(false);
  const [typeCall, setTypeCall] = useState("");

  useEffect(() => {
    socket?.on("pre-offer", (data) => {
      console.log(`pre-offer CAME`, data);
      const { callerId, type } = data;
      setTypeCall(type);
      setInComingCall(true);
    });
  }, [socket]);

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
        />
      </div>
    </Grid>
  );
}
