import React from "react";
import ecommerceData from "../data/ecommerce";
import { track } from "../segment/Events";
import { JSONBlock, TriggerButton } from "../utils";

export default function Ecommerce() {
  return (
    <React.Fragment>
      <h1>Ecommerce Events</h1>
      <hr />
      {Object.keys(ecommerceData).map((dataKey) => (
        <div key={dataKey}>
          <fieldset>
            <h3>{ecommerceData[dataKey].event}</h3>
            <JSONBlock data={ecommerceData[dataKey].data} />
            <TriggerButton
              onClick={() =>
                track(ecommerceData[dataKey].event, ecommerceData[dataKey].data)
              }
            />
          </fieldset>
          <br />
        </div>
      ))}
    </React.Fragment>
  );
}
