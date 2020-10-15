import React from "react";
import { testData } from "../data";
import {
  signUp,
  login,
  purchaseProduct,
  selectProduct,
  likeArticle,
  shareArticle,
  bookmarkArticle,
} from "../segment/Events";

const prettyJSON = (data) => JSON.stringify(data, 0, 2);

const JSONBlock = ({ data }) => <pre>{prettyJSON(data)}</pre>;

const TriggerButton = ({ data, callback }) => {
  const handleClick = () => {
    callback(data);
  };

  return <button onClick={() => handleClick()}>Trigger</button>;
};
export default function Main() {
  return (
    <div>
      <fieldset>
        <JSONBlock data={testData.signUp} />
        <h3>Sign Up</h3>
        <TriggerButton callback={signUp} data={testData.signUp} />
      </fieldset>
      <br />

      <fieldset>
        <JSONBlock data={testData.login} />
        <h3>Login</h3>
        <TriggerButton callback={login} data={testData.login} />
      </fieldset>
      <br />

      <fieldset>
        <JSONBlock data={testData.purchaseProduct} />
        <h3>Purchase A Product</h3>
        <TriggerButton
          callback={purchaseProduct}
          data={testData.purchaseProduct}
        />
      </fieldset>
      <br />

      <fieldset>
        <JSONBlock data={testData.selectProduct} />
        <h3>Select A Product</h3>
        <TriggerButton callback={selectProduct} data={testData.selectProduct} />
      </fieldset>
      <br />

      <fieldset>
        <JSONBlock data={testData.likeArticle} />
        <h3>Like an Article</h3>
        <TriggerButton callback={likeArticle} data={testData.likeArticle} />
      </fieldset>
      <br />

      <fieldset>
        <JSONBlock data={testData.shareArticle} />
        <h3>Share an Article</h3>
        <TriggerButton callback={shareArticle} data={testData.shareArticle} />
      </fieldset>
      <br />

      <fieldset>
        <JSONBlock data={testData.bookmarkArticle} />
        <h3>Bookmark Article</h3>
        <TriggerButton
          callback={bookmarkArticle}
          data={testData.bookmarkArticle}
        />
      </fieldset>
    </div>
  );
}
