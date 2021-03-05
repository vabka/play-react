import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";

import TodoListActivity from "./activities/todo-list-activity";
import AppActivity from "./activities/app-activity";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route path="/todo">
          <TodoListActivity />
        </Route>
        <Route path="/">
          <AppActivity />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
