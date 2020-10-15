import React, { useEffect } from "react";
import { Switch, Route, useLocation, Link } from "react-router-dom";
import Main from "./pages/Main";
import SecondaryPage from "./pages/SecondaryPage";
import AnotherPage from "./pages/AnotherPage";
import { pageView } from "./segment/Events";

function App() {
  const location = useLocation();

  useEffect(() => {
    pageView(location);
  }, [location]);

  return (
    <React.Fragment>
      <div>
        <Link to="/">Home Page </Link>
        <Link to="/secondary-page">Second Page</Link>
        <Link to="/another-page">Another Page</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/secondary-page" component={SecondaryPage} />
        <Route exact path="/another-page" component={AnotherPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
