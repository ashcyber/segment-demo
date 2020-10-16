import segment from "./index";

const userID = "abcd_123";

export const track = (eventName, props, context = null) => {
  if (context) segment.track(eventName, props, context);
  else {
    segment.track(eventName, props);
  }
};

export const pageView = ({ pathname }) => {
  segment.pageview(pathname);
};

export const identify = (uid = null, traits = {}) => {
  segment.identify(uid ? uid : userID, { ...traits });
};

export const reset = () => {
  segment.reset();
};
