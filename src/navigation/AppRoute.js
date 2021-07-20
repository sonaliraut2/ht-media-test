import React from "react";
import { Redirect, Route } from "react-router-dom";
import { SCREEN_PATHS } from "./paths";

/**
 * Extended Route component.
 * Checks whether or not route is private, performs redirect to "Login" based on auth state.
 */
const AppRoute = ({
  path,
  redirect,
  private: isPrivate,
  routes,
  component: Component,
  children,
}) => {
  return (
    <Route
      path={path}
      children={children}
      render={(props) =>
        redirect ? (
          <Redirect to={redirect} />
        ) : (
          Component && <Component {...props} routes={routes} />
        )
      }
    />
  );
};

export default AppRoute;
