import React from "react";

export const JSONBlock = ({ data }) => <pre>{JSON.stringify(data, 0, 2)}</pre>;

export const TriggerButton = ({ onClick }) => {
  return <button onClick={() => onClick()}>Trigger</button>;
};
