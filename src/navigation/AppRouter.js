import React from "react";
import { Switch } from "react-router-dom";
import AppRoute from "./AppRoute";

/**
 * Renders the routes for given configuration
 * @param routes - array of routes configurations
 */
export const AppRouter = (props) => {
  return (
    <>
      <Switch>
        {props.routes.map((routeConfig) => (
          <AppRoute key={routeConfig.path?.toString()} {...routeConfig} />
        ))}
      </Switch>
    </>
  );
};

export default AppRouter;
