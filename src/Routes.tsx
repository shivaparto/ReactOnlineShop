import * as React from "react";
import ProductsPage from "./ProductsPage";
import { Suspense } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProductPage from "./ProductPage";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
import ContactUsPage from "./ContactUsPage";
const AdminPage = React.lazy(() => import("./AdminPage"));

const RoutesWrap: React.SFC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};
const Routes: React.SFC<RouteComponentProps> = (props) => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={500}
          classNames="animate"
        >
          <Switch>
            <Redirect exact={true} from="/" to="/products/" />
            <Route path="/products/:id" component={ProductPage} />
            <Route exact={true} path="/products" component={ProductsPage} />
            <Route path="/contactus" component={ContactUsPage} />
            <Route path="/admin">
              {loggedIn ? (
                <Suspense
                  fallback={<div className="page-container">Loading...</div>}
                >
                  <AdminPage />
                </Suspense>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default RoutesWrap;
