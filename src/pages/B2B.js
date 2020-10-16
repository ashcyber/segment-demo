import React from "react";
import b2bData from "../data/b2bsaas";
import { track, reset, identify } from "../segment/Events";
import { JSONBlock, TriggerButton } from "../utils";

const userID = "abcd123";

export default function B2B() {
  const delay = (callback) => setTimeout(callback, 500);

  const afterSignup = () => {
    delay(
      identify(userID, {
        ...b2bData.signedUp.data,
      })
    );
  };

  const afterLogin = () => {
    delay(
      identify(userID, {
        ...b2bData.signedUp.data,
      })
    );
  };

  const afterLogout = () => {
    delay(reset());
  };

  const handleClick = (data) => {
    track(data.event, data.data, data.context);
    if (data.event === b2bData.signedUp.event) {
      afterSignup();
    } else if (data.event === b2bData.signedIn.event) {
      afterLogin();
    } else if (data.event === b2bData.signedOut.event) {
      afterLogout();
    }
  };
  return (
    <React.Fragment>
      <h1>B2B SaaS Events</h1>
      <hr />
      {Object.keys(b2bData).map((dataKey) => (
        <div key={dataKey}>
          <fieldset>
            <h3>{b2bData[dataKey].event}</h3>
            <JSONBlock data={b2bData[dataKey].data} />
            <TriggerButton onClick={() => handleClick(b2bData[dataKey])} />
          </fieldset>
          <br />
        </div>
      ))}
    </React.Fragment>
  );
}
