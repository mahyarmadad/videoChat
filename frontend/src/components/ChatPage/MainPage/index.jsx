import { Grid } from "@material-ui/core";
import { useState } from "react";
import CallButtons from "./CallButtons";
import "./mainPage.css";
import RecordButtons from "./RecordButtons";
import poster from "./screenShot.png";
import VideoButtons from "./VideoButtons";

export default function MainPage() {
  const [isCalling, setIsCalling] = useState(false);
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
      </div>
    </Grid>
  );
}
