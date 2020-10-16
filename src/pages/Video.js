import React from "react";
import videoData from "../data/video";
import { track } from "../segment/Events";
import { JSONBlock, TriggerButton } from "../utils";

export default function Video() {
  return (
    <React.Fragment>
      <h1>Video Events</h1>
      <hr />
      {Object.keys(videoData).map((dataKey) => (
        <div key={dataKey}>
          <fieldset>
            <h3>{videoData[dataKey].event}</h3>
            <JSONBlock data={videoData[dataKey].data} />
            <TriggerButton
              onClick={() =>
                track(videoData[dataKey].event, videoData[dataKey].data)
              }
            />
          </fieldset>
          <br />
        </div>
      ))}
    </React.Fragment>
  );
}
