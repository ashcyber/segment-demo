import segment from "./index";
import { testServerResponse } from "../data";

const SIGN_UP = "Sign Up",
  LOGIN = "Login",
  PURCHASE = "Purchase",
  SELECT_PRODUCT = "Select Product",
  LIKE_ARTICLE = "Like Article",
  SHARE_ARTICLE = "Share Article",
  BOOKMARK_ARTICLE = "Bookmark Article";

const track = (eventName, props) => {
  segment.track(eventName, props);
  alert(`track - ${eventName} - ${JSON.stringify(props)}`);
};

/** Page View */
export const pageView = ({ pathname }) => {
  segment.pageview(pathname);
};

/** Track Events */
export const signUp = ({ name, email, plan }) => {
  track(SIGN_UP, {
    name,
    email,
    plan,
  });

  setTimeout(() => {
    segment.identify(testServerResponse.user_id);
  }, 500);
};

export const login = ({ email }) => {
  track(LOGIN, {
    email,
  });

  setTimeout(() => {
    segment.identify(testServerResponse.user_id);
  }, 500);
};

export const selectProduct = (properties = {}) => {
  track(SELECT_PRODUCT, properties);
};

export const purchaseProduct = (properties = {}) => {
  track(PURCHASE, properties);
};

export const likeArticle = (properties = {}) => {
  track(LIKE_ARTICLE, properties);
};

export const shareArticle = (properties = {}) => {
  track(SHARE_ARTICLE, properties);
};

export const bookmarkArticle = (properties = {}) => {
  track(BOOKMARK_ARTICLE, properties);
};
