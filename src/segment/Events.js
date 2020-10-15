import segment from "./index";
import { testServerResponse } from "../data";

const
  SIGN_UP           = "User Signed Up",
  LOGIN             = "User Logged in",
  PURCHASE          = "Product Purchased",
  SELECT_PRODUCT    = "Product Selected",
  LIKE_ARTICLE      = "Article Liked",
  SHARE_ARTICLE     = "Article Shared",
  BOOKMARK_ARTICLE  = "Article Bookmarked";

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
