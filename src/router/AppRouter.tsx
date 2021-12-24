import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

import routes from "../routes";

interface LoadableProps {
  view: string;
}

const LoadableView = loadable(
  (props: LoadableProps) => import(`../views/${props.view}/index`)
);
const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => {
        return (
          <Route
            key={`view.${route.name}`}
            exact={route.exact}
            path={route.path}
            render={(props) => {
              return <LoadableView {...props} view={route.view} />;
            }}
          />
        );
      })}
    </Switch>
  );
};

export default AppRouter;
