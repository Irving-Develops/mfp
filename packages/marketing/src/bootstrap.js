import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";

import App from "./App";

//Mount start function to start up app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);
  console.log("Container just rendered")
  return {
    onParentNavigate({ pathname: nextPathName }) {
        console.log("Container just navigated")
      const { pathname } = history.location;

      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};
//If we are in development and isolation
//call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot, {});
  }
}

//We are running through container
//and we should export the mount function

export { mount };
