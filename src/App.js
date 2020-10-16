import React, { useEffect } from "react";
import { Switch, Route, useLocation, Link } from "react-router-dom";

import EcommercePage from "./pages/Ecommerce";
import B2BPage from "./pages/B2B";
import VideoPage from "./pages/Video";

import { pageView } from "./segment/Events";

const Navigation = () => (
  <div>
    <Link exact to="/ecommerce">
      Ecommerce Events{" "}
    </Link>{" "}
    <br />
    <Link exact to="/b2b">
      {" "}
      B2B SaaS Events{" "}
    </Link>
    <br />
    <Link exact to="/video">
      Video Events{" "}
    </Link>
    <br />
  </div>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    pageView(location);
  }, [location]);

  return (
    <React.Fragment>
      <Navigation />
      <hr />
      <Switch>
        <Route exact path="/ecommerce" component={EcommercePage} />
        <Route exact path="/b2b" component={B2BPage} />
        <Route exact path="/video" component={VideoPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
